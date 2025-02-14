'use strict'

import mongoose from "mongoose";

export const dbConnection = async () =>{
    try{
        mongoose.connection.on('error', ()=>{
            console.log('MongoDb | could not  be connected to MongoDB');
            mongoose.disconnect();
        });
        mongoose.connection.on('connecting', ()=>{
            console.log('MongoDb | try connecting');
        });
        mongoose.connection.on('connected', ()=>{
            console.log('MongoDb | connected to MongoDB');
        });
        mongoose.connection.on('open', ()=>{
            console.log('MongoDb | connected to database');
        });
        mongoose.connection.on('reconnected', ()=>{
            console.log('MongoDb | reconnected  to MongoDB');
        });
        mongoose.connection.on('disconnected', ()=>{
            console.log('MongoDb | disconnected ');
        });
        await mongoose.connect(process.env.URI_MONGO,{
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50,
        });
    }catch(error){
        console.log('Database connecting failed', error)
    }
}