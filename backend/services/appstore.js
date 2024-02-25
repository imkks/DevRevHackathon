import store from 'app-store-scraper'
import db from '../db/conn.js';
    let appStoreReviewCollection =await db.collection('appstore_reviews')

export const fetchAppStoreReviews = async () => {

    try{
    let reviews=await store.reviews({
        appId:'com.midasplayer.apps.candycrushsaga',
    
        lang: 'en',
        sort: store.sort.HELPFUL,
        page:1    });
    reviews.forEach(review => {
        review["_id"]=review.id;
        
    });
    
    // console.log("hello",reviews)
    await appStoreReviewCollection.insertMany(reviews,{ordered:false});
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
    return await db.col


}