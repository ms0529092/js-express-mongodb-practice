import { SignModel } from '../model';

class UserVerify {
    constructor( value = {} ){
        this.collection = value.collection;
        this.requset = value.req;
    }

    checkUser(){
        const self = this,
            {
                collection,
                requset
            } = self;
            
        let result;
        let filterDataBase = () => collection.find({ phone:requset.body.phone, password:requset.body.password }).toArray();

        
        result = new Promise((resolve, reject)=>{
            filterDataBase()
                .then((value)=>{
                    resolve(value);
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

export default UserVerify;