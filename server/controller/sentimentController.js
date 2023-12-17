const language = require('@google-cloud/language');


exports.sentimentAnalyse = async (req,res)=>{

    try {
        const text = req.body.text;
        const data = await analyse(text);
        let result = "";
        if(data.score > 0){
            result = "Positive Opinion";
        }
        else if(data.score < 0 ){
            result = "Negative Opinion";
        }
        else{
            result = "Neutral Opinion";
        }
        return res.status(200).json({
            message:"Successfull Analysis",
            result:result,
            data:data
        });
    } catch (error) {
        console.log("Error!!!",error);
        return res.status(500).json({
            message:"Error in the Analysis",
            error:error
        });
    }
}

exports.sentimentEntityAnalysis = async (req,res)=>{

    try {
        const client = new language.LanguageServiceClient({
            keyFilename:"./soy-audio-405914-822dd0666477.json"
        });

        const document = {
        content: req.body.text,
        type: 'PLAIN_TEXT',
        };

        const [result] = await client.analyzeEntities({document});

        const entities = result.entities;

        const data=[]
        entities.forEach(entity => {
            const res1={
                name:entity.name,
                type:entity.type,
                salience:entity.salience
            }

            if (entity.metadata && entity.metadata.wikipedia_url) {
                res1.wikiURL = entity.metadata.wikipedia_url;
            }
            data.push(res1);
        });
        res.status(200).json({
            message:"Entities Analysed Successfully",
            data:data
        });
    } catch (error) {
        res.status(500).json({
            message:"Entities Analysis Error",
            error:error
        });
    }
}



async function analyse(text){
    const client = new language.LanguageServiceClient({
        keyFilename:"./soy-audio-405914-822dd0666477.json"
    });

    const document = {
    content: text,
    type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({document});

    const sentiment = result.documentSentiment;
    return sentiment;
}