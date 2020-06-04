import { UserVerify } from '../middlewares';

class UserHelper {
    constructor(value){
        this.UserVerify = new UserVerify(value);
    }

    async signVerify(){
        let result;

        result = await this.UserVerify.checkUser();
        // result = await this.UserVerify.insert();

        return result;
    };

    async loginVerify(){
        let result;

        result = await this.UserVerify.checkUser();

        return result;
    };
}

export default UserHelper;