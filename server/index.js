import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';


const app=express();
//Now befor routing we need to use cors
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use('/',routes);
const PORT=8000;

Connection();

app.listen(PORT,()=>console.log('Port has strtaed on 8000'));