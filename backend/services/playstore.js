import gplay from 'google-play-scraper'
import { LLMUtils } from '../utils/llm_utils.js';
import db from '../db/conn.js';


// const apiUtil: ApiUtil= new ApiUtils(APIBase, devrevPAT);
// const llmUtil = new LLMUtils(process.env.FIREWORKS_API_KEY, `accounts/fireworks/models/qwen-72b-chat`, 200);
let playStoreReviewCollection =await db.collection('playstore_reviews')


export const fetchPlayStoreReviews = async () => {
    try{
    let reviews=await gplay.reviews({
        appId:'com.ludo.king',
        lang: 'en',
        sort: gplay.sort.HELPFULNESS,
        num: 10    });
    reviews["data"].forEach(review => {
        review["_id"]=review.id;
        
    });
    
    // console.log("hello",reviews.data)
    await playStoreReviewCollection.insertMany(reviews.data);
}
    catch(e)
{
    if(e.code == 11000){
        console.log(e);
        console.error("Duplicate entry read");}
    else
        throw new Error("Something wrong happend")
}

};
export const getReviews=async()=>{
    return await playStoreReviewCollection.find();

}