import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection =()=>{
   
    const DB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-sez1jl6-shard-00-00.z1hdbhv.mongodb.net:27017,ac-sez1jl6-shard-00-01.z1hdbhv.mongodb.net:27017,ac-sez1jl6-shard-00-02.z1hdbhv.mongodb.net:27017/?ssl=true&replicaSet=atlas-63nnqh-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        mongoose.set('strictQuery',false);
        console.log("Database Connected Sucessfully");
    }catch(error){
        console.log('Error while connecting the database',error.message);
    }
}

export default Connection;