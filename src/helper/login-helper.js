class loginHelper {
    constructor({ collection, req }){
        this.collection = collection;
        this.requset = req;
    }

    async loginVerify(){
        let result;

        result = Promise.all([this.checkUser()])
            .then((value)=>{
                return Promise.resolve(value);
            })
            .catch((error)=>{
                return Promise.reject(error);
            });

        return result;
    };

    checkUser(){
        const self = this,
            {
                collection,
                requset
            } = self;
            
        let result;
        let filterDataBase = () => collection.find({  phone:requset.body.phone, password:requset.body.password  }).toArray();

        
        result = new Promise((resolve, reject)=>{
            filterDataBase()
                .then((value)=>{
                    if(value.length === 0){
                        reject('no User!!!');
                    } else if(value.length === 1) {
                        resolve(value);
                    } else {
                        reject('system Error!!!');
                    }
                })
                .catch((error)=>{
                    reject(error);
                })
        });

        return result;
    };

} 

export default loginHelper;
