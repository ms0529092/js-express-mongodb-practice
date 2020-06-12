import { UserVerify } from '../middlewares';
import { ResponseModel } from '../model';

class UserHelper {
    constructor(value){
        this.userVerify = new UserVerify(value);
        this.responseModel = (value) => new ResponseModel(value);
    }

    async signVerify(){
        let result;

        result = await this.userVerify.checkUser()
            .then((value)=>{
                
                if(value.length === 0){
                    console.log('sign success');
                    return Promise.resolve(this.responseModel({ retCode:'0000', retMsg:'success', content:value  }));
                }
                console.log('sign faild');
                return Promise.reject(this.responseModel({ retCode:'0001', retMsg:'Input parameter count or format error !', content:value  }));
            })
            .catch((error)=>{
                console.log('sign faild error');
                return Promise.reject(error);
            });

        result = await this.userVerify.insert();

        return result;
    };

    async loginVerify(){
        let result;

        result = await this.userVerify.checkUser()
            .then((value)=>{
                console.log(value);
                if(value.length !== 0){
                    return Promise.resolve(value[0]);
                }

                return Promise.reject('you are no Member!! Please Sign our Member !!');
            })
            .catch((error)=>{
                return Promise.reject(error);
            })

        return result;
    };

    async getUserListVerify(){
        let result;

        result = await this.userVerify.checkUser()
            .then((value)=>{
                return Promise.resolve(value);
            })
            .catch((error)=>{
                return Promise.reject(error);
            })

        return result;

    }
}

export default UserHelper;