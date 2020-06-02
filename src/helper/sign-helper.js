class SignHelper {
    constructor({ collection, req }){
        this.collection = collection;
        this.requset = req;
    }

    async signVerify(){
        let result;

        result = Promise.all([this.checkSameUser(), this.insert()])
            .then((value)=>{
                return Promise.resolve('done');
            })
            .catch((error)=>{
                return Promise.reject(error);
            });

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

    async insert(){
        const self = this,
            {
                collection,
                requset
            } = self;

            let user = {
                phone:requset.body.phone,
                password:requset.body.password,
                username:requset.body.username
            };

            let result;
            let insertData = collection.insertOne(user);

            try{
                result = await insertData;
            } catch (error) {
                result = error;
            }
            
            return result;
    };
} 

export default SignHelper;
