import express from 'express';
import user from './user.js';

const router = express.Router();

let  createRouter = (dependencies) => { 
    const { client, mongoSevice } = dependencies;

    if(!client){
        console.log('client is empty');
        return
    }

    //獲取資料庫連線狀態
    // router.get('/', (req, res, next)=>{
    //     mongoSevice.isConnected().then(isConnected => {
    //         res.json({ isConnected });
    //     }).catch(next);
    // });

    router.use(user.sign(mongoSevice));
    router.use(user.login(mongoSevice));
    router.use(user.getUserList(mongoSevice));

    return router;
}

export default createRouter;