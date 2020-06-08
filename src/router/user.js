import express from 'express';
import { JwtMiddlewares } from '../middlewares';

const router = express.Router();
const jwtMiddlewares = new JwtMiddlewares();

let user = {
    sign:(service)=>{
        router.post('/sign',service.signUp());

        return router;
    },
    login:(service)=>{
        router.post('/login' ,service.login());

        return router;
    },
    getUserList:(service)=>{
        router.post('/getUserList' ,jwtMiddlewares.verifyJWT() ,service.getUserList());

        return router;
    }
}

export default user;
