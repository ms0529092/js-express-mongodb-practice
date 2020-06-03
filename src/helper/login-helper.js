class LoginHelper {
    constructor(value = {}){
        this.collection = value.collection;
        this.requset = value.req;
    }

    async loginVerify(){
        let result;

        result = await this.checkUser();

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

export default LoginHelper;
