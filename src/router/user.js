import express from 'express';
import { JwtVerify } from '../middlewares';

const router = express.Router();
const jwtVerify = new JwtVerify();

let user = {
    sign:(service)=>{
        router.post('/sign',(req, res, next)=>{
            service.signUp(req, res);
        });

        return router;
    },
    login:(service)=>{
        router.post('/login' ,jwtVerify.verifyJWT() ,(req, res) => {
            service.login(req, res);
        });

        return router;
    }
}

export default user;
