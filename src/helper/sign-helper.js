import { ResponseModel, SignModel } from '../model';

class SignHelper {
    constructor({ collection, req }){
        this.collection = collection;
        this.requset = req;
    }

    async signVerify(){
        let result;

        result = await this.checkSameUser();
        result = await this.insert();

        return result;
    };
    
    checkSameUser(){
        const self = this,
            {
                collection,
                requset
            } = self;
            
        let result;
        let filterDataBase = () => collection.find({  phone:requset.body.phone  }).toArray();

        
        result = new Promise((resolve, reject)=>{
            filterDataBase()
                .then((value)=>{
                    switch(value.length){
                        case 0: 
                            resolve(value);
                        break;
                        default:
                            reject('DataBase find same Data');
                        break;
                    }
                })
                .catch((error)=>{
                    reject(error);
                })
        });

        return result;
    };

    insert(){
        const self = this,
            {
                collection,
                requset
            } = self;

            let result;
            let user = new SignModel(requset.body);
            let insertData = () => collection.insertOne(user);

            result = new Promise((resolve, reject)=>{
                insertData()
                .then((value)=>{
                    resolve(value);
                })
                .catch((error)=>{
                    reject(error);
                })
            })
            
            return result;
    };
} 

export default SignHelper;
