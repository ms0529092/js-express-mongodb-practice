import SignHelper from '../helper/sign-helper.js';
import LoginHelper from '../helper/login-helper.js';

class MongoSevice {
    constructor({ client, dbName, collectionName }){
        this.mongoClient = client;
        this.mongoDBName = dbName;
        this.mongoCollectionName = collectionName;
    }

    isConnected(){
        return Promise.resolve(this.mongoClient.isConnected());
    };

    signUp(req, res, next){
        const db = this.mongoClient.db(this.mongoDBName),
              collection = db.collection(this.mongoCollectionName),
              signHelper = new SignHelper({ collection, req });

        signHelper.signVerify()
        .then((value)=>{
            res.send({ data:'server is Sign', value:value });
        })
        .catch((error)=>{
            res.send({ data:'server is not Sign', error:error });
        })
    };

    login(req, res, next){
        const db = this.mongoClient.db(this.mongoDBName),
              collection = db.collection(this.mongoCollectionName),
              loginHelper = new LoginHelper({ collection, req });

        loginHelper.loginVerify()
        .then((value)=>{
            res.send({ data:'frontEnd is login' });
        })
        .catch((error)=>{
            res.send({ data:'frontEnd is no login', error:error });
        })
    }
}

export default MongoSevice;