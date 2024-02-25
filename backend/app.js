
import express, { json  } from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import { errorHandler } from './middlewares/Errorhandler.js';
import AppstoreRouter from './controllers/appstore.js';
import db from './db/conn.js';

// import { openai } from './utils/openai_utils.js';
import { aggregateReviews, fetchInsights } from './services/aggregate.js';

const PORT =process.env.PORT || 4000
const app = express();
app.use(cors({
  origin:"*"
}))
app.use(express.json());

app.use('/appstore',AppstoreRouter) 
app.get('/', async(request, response) => {
    let res=await fetchInsights();
    response.json(res);
  });
app.get('/:id',(request,response)=>{
    response.send(request.params.id)
})
app.post('/',(request, response) => {
    response.send(request.body);
  })
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`API Server is listening on ${PORT}`)
})