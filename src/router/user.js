import express from 'express';

const router = express.Router();

let user = {
    sign:(mongoSevice)=>{
        router.post('/sign' ,(req, res, next) => {
            const user = {
                phone:req.body.phone,
                password: req.body.password,
                username: req.body.username,
            }
            
            mongoSevice.insert(user)
                .then(()=>{
                    res.send({ 
                        data:'success'
                    })
                })
                .catch(()=>{
                    next()
                });
        });

        return router;
    },
    login:(mongoSevice)=>{
        router.post('/login' ,(req, res) => {
            res.send({ data:'this is login'});
        });

        return router;
    }
}

export default user;
