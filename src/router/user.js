import express from 'express';
import jwt from 'jsonwebtoken';

let user = (mongoSevice) =>{
    const router = express.Router();

    router.post('/signUp' ,(req, res) => {
        res.send('signUp');
    });

    router.post('/login' ,(req, res) => {
        res.send('login');
    });
    
    return router;
};

export default user;
