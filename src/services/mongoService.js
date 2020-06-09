import { UserHelper } from '../helper';
import { JwtMiddlewares } from '../middlewares';
class MongoSevice {
    constructor(value = {}){
        this.mongoClient = value.client;
        this.mongoDBName = value.dbName;
        this.mongoCollectionName = value.collectionName;

        this.db = () => this.mongoClient.db(this.mongoDBName);
        this.collection = () => this.db().collection(this.mongoCollectionName);

        this.userHelper = ( req ) => new UserHelper({ collection:this.collection(), req });
        this.jwtMiddlewares = (value) => new JwtMiddlewares(value);
        
    }

    signUp(){
        let result;

        result = (req, res) => {
            this.userHelper(req).signVerify()
                .then((value)=>{
                    res.send({ data:'server is Sign', value:value });
                })
                .catch((error)=>{
                    res.send({ data:'server is not Sign', error:error });
                })
        }

        return result;
    };

    login(){
        let result;

        result = (req, res) => {
            this.userHelper(req).loginVerify()
                .then((value)=>{ 
                    const token = this.jwtMiddlewares().getJWTToken(value);
                    res.cookie('token', token, {  maxAge: this.jwtMiddlewares().EXPIRESIN, httpOnly: true });
                    res.send({ data:'frontEnd is login', token:token });
                })
                .catch((error)=>{
                    res.send({ data:'frontEnd is no login', error:error });
                })
        }

        return result;
    };

    getUserList(){
        let result;

        result = (req, res) => {
            this.userHelper(req).getUserListVerify()
                .then((value)=>{
                    console.log(value);
                    res.send({ data:'frontEnd is mapping userList', value:value });
                })
                .catch((error)=>{
                    res.send({ data:'frontEnd is no mapping userList ', error:error });
                })
        }

        return result;
    };
}

export default MongoSevice;