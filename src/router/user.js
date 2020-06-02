import express from 'express';

const router = express.Router();

let user = {
    sign:(service)=>{
        router.post('/sign', (req, res, next)=>{
            service.signUp(req, res, next);
        });

        return router;
    },
    login:(service)=>{
        router.post('/login' ,(req, res, next) => {
            service.login(req, res, next);
        });

        return router;
    }
}

export default user;
