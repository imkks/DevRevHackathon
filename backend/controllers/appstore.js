
import express from 'express'
import { fetchPlayStoreReviews } from '../services/playstore.js';
import { fetchAppStoreReviews } from '../services/appstore.js';
import { aggregateReviews } from '../services/aggregate.js';
const AppstoreRouter= express.Router();

AppstoreRouter.get('/',async(req,res,next)=>{
    // fetchPlayStoreReviews();
    try{
    // await fetchAppStoreReviews();
    let resp=await fetchPlayStoreReviews();
    // await aggregateReviews();
    res.json(resp)
    }
    catch(e)
    {
        next(e);
    }

})
export default AppstoreRouter