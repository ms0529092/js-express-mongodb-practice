import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import CreatedRouter from './router';
import { MongoClient } from 'mongodb';
import MongoServerConfig from './config/serverConfig.js';
import MongoSevice from './services/mongoService.js';

const app = express(),
      port = process.env.PORT || 9090;

const { url, dbName, collectionName } = MongoServerConfig,
      client = new MongoClient(url, { useUnifiedTopology:true }), //mongodb client端物件
      mongoSevice = new MongoSevice({ client, dbName, collectionName }); // 資料庫連線狀態集中處理

client.connect()
.then((connectedClient)=>{
    console.log('mongodb is connect');
})
.catch((error)=>{
    console.log(`mongodb is not connect ${ error }`);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/', CreatedRouter({client, mongoSevice}));

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});