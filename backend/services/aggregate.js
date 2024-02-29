import db from "../db/conn.js"
import { chatCompletion } from "../utils/openai_utils.js";
// const llmUtil = new LLMUtils(process.env.FIREWORKS_API_KEY, `accounts/fireworks/models/qwen-72b-chat`, 200);

export const aggregateReviews=async ()=>{
    try{
   let reviews=await db.collection("playstore_reviews").aggregate([
        { $project: { text:1,_id: 0 } },
        { $unionWith: { coll: "appstore_reviews", pipeline: [ { $project: { text:1,_id: 0 } } ]} },
        {$limit:20}
     ]).toArray();
    //  console.log(reviews.length)
     let finalReviews=``;
     for(let i=0;i<2;i++)
     {
        // finalReviews.push(reviews[i].text)
        finalReviews+=reviews[i].text+'\n\n';
        // finalReviews=
     }
    //  let processReview=finalReviews[0]+'\n'+finalReviews[1];
    //  console.log(finalReviews)
finalReviews = finalReviews.replace(/[^\x00-\x7F]/g, '');



     return finalReviews;
    return processReview;
    }
    catch(e)
    {
        // console.log("krishna error");
        console.log(e);
    }
     

}
export const fetchInsights=async()=>
{
    let reviews=await aggregateReviews();
    let response=await getDataFromModel(reviews);
    let str1=response.content;
    str1=str1.replace(/\n+^[\s]+|[\s]+$/g, '');
    return str1;
    response.content=str1;
    console.log(response);
    
// Convert the string to JSON
// let jsonObject = JSON.parse(cleanedString);


// console.log(jsonObject);
    // response=JSON.parse(response)
    // return jsonObject;
    // console
    return response;

}
export const getDataFromModel=async(reviews)=>
{
    // llmUtil.chatCompletion()
    try{    
        // console.log(reviews)
        const resp=await chatCompletion(reviews);

    // console.log(resp);
    return resp;
    }
    catch(e)
    {
        console.log(e);
    }


}
