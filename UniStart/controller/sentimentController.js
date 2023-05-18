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

    const client = new language.LanguageServiceClient();

    const document = {
    content: req.body.text,
    type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeEntities({document});

    const entities = result.entities;

    console.log('Entities:');
    entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
        console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    }
    });
}



async function analyse(text){
    const client = new language.LanguageServiceClient();

    const document = {
    content: text,
    type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({document});

    const sentiment = result.documentSentiment;
    return sentiment;
}