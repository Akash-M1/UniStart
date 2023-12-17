const Threads = require('../model/threads');
const axios = require('axios')

exports.ratingRender = async (req,res)=>{
    const college_name = req.body.college_name;
    try {
        const threadsByCollegename = await Threads.findOne({name:college_name});
        const resultReviews = [];
        for(let i=0;i<threadsByCollegename.contents.length;i++){
            const review = await axios({
                method:'post',
                url:'http://localhost:8000/analyse',
                data:{
                    text:threadsByCollegename.contents[i].content
                }
            });
            resultReviews.push(review.data.data.score);
        }
        let finalaverageratings = avg_rating(resultReviews);
        finalaverageratings=parseInt(finalaverageratings);
        return res.status(200).json({
            ratings:finalaverageratings,
            infos:threadsByCollegename.contents,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Error in rendering the data",
            error:error
        })
    }
    
}


function avg_rating(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    let result = sum/arr.length;
    result = ((result+1)/2)*100;
    return result;
}