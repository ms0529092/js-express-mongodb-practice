import { UserHelper } from '../helper';

class MongoSevice {
    constructor(value = {}){
        this.mongoClient = value.client;
        this.mongoDBName = value.dbName;
        this.mongoCollectionName = value.collectionName;

        this.db = () => this.mongoClient.db(this.mongoDBName);
        this.collection = () => this.db().collection(this.mongoCollectionName);

        this.userHelper = ( req ) => new UserHelper({ collection:this.collection(), req });
    }

    // isConnected(){
    //     return Promise.resolve(this.mongoClient.isConnected());
    // };

    signUp(req, res){

        this.userHelper(req).signVerify()
            .then((value)=>{
                res.send({ data:'server is Sign', value:value });
            })
            .catch((error)=>{
                res.send({ data:'server is not Sign', error:error });
            })
    };

    login(req, res){

        this.userHelper(req).loginVerify()
            .then((value)=>{
                res.send({ data:'frontEnd is login', value:value });
            })
            .catch((error)=>{
                res.send({ data:'frontEnd is no login', error:error });
            })
    };
}

export default MongoSevice;