import { UserVerify } from '../middlewares';
import { ResponseModel } from '../model';

class UserHelper {
    constructor(value){
        this.UserVerify = new UserVerify(value);
        this.ResponseModel = (value) => new ResponseModel(value);
    }

    async signVerify(){
        let result;

        result = await this.UserVerify.checkUser()
            .then((value)=>{
                if(value.length === 0){
                    return Promise.resolve(value);
                }

                return Promise.reject('Input parameter count or format error !');
            })
            .catch((error)=>{
                return Promise.reject(error)
            });

        result = await this.UserVerify.insert();

        return result;
    };

    async loginVerify(){
        let result;

        result = await this.UserVerify.checkUser()
            .then((value)=>{
                if(value.length === 0){
                    return Promise.resolve(value);
                }

                return Promise.reject('Input parameter count or format error !');
            })
            .catch((error)=>{
                return Promise.reject(error);
            })

        return result;
    };
}

export default UserHelper;