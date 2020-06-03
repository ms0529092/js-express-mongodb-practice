import SignHelper from '../helper/sign-helper.js';
import LoginHelper from '../helper/login-helper.js';
import GetUserListHelper from '../helper/getUserList-helper.js';
import jwt from 'jsonwebtoken';

class MongoSevice {
    constructor({ client, dbName, collectionName }){
        this.mongoClient = client;
        this.mongoDBName = dbName;
        this.mongoCollectionName = collectionName;

        this.db = this.mongoClient.db(this.mongoDBName);
        this.collection = this.db.collection(this.mongoCollectionName);
    }

    isConnected(){
        return Promise.resolve(this.mongoClient.isConnected());
    };

    signUp(req, res, next){
        const signHelper = new SignHelper( this.collection, req );

        signHelper.signVerify()
        .then((value)=>{
            res.send({ data:'server is Sign', value:value });
        })
        .catch((error)=>{
            res.send({ data:'server is not Sign', error:error });
        })
    };

    login(req, res, next){
        const loginHelper = new LoginHelper(this.collection, req);

        const EXPIRES_IN = 10 * 1000;

        loginHelper.loginVerify()
        .then((value)=>{
            const user = {
                username:value[0].username,
                phone:value[0].phone
            };
            const token = jwt.sign(user, value[0].password, { expiresIn: EXPIRES_IN });

            res.cookie('token', token, { maxAge: EXPIRES_IN, httpOnly: true}); 
            res.send({ data:'frontEnd is login' , token:token });
        })
        .catch((error)=>{
            res.send({ data:'frontEnd is no login', error:error });
        })
    };

    getUserList(req, res, next){

    }
}

export default MongoSevice;