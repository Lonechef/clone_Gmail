import mongoose from 'mongoose';


const Connection =()=>{
    const DB_URI=`mongodb://gmail:gmailclone@ac-sez1jl6-shard-00-00.z1hdbhv.mongodb.net:27017,ac-sez1jl6-shard-00-01.z1hdbhv.mongodb.net:27017,ac-sez1jl6-shard-00-02.z1hdbhv.mongodb.net:27017/?ssl=true&replicaSet=atlas-63nnqh-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log("Database Connected Sucessfully");
    }catch(error){
        console.log('Error while connecting the database',error.message);
    }
}

export default Connection;