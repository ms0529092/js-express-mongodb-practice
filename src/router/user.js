import express from 'express';

const router = express.Router();

let user = {
    sign:(service)=>{
        router.post('/sign', (req, res, next)=>{
            service.signUp(req, res);
        });

        return router;
    },
    login:(service)=>{
        router.post('/login' ,(req, res) => {
            service.login(req, res);
        });

        return router;
    }
}

export default user;
