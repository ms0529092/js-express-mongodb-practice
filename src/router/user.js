import express from 'express';

let user = (mongoSevice) =>{
    const router = express.Router();

    router.post('/user' ,(req, res, next) => {
        const body = req.body;

        mongoSevice.insert(body)
        .then(()=>{
            res.json(body);
        })
        .catch(next)
    });

    return router;
};

export default user;
