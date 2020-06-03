import SignModel from './sign-model.js';
import LoginModel from './login-model.js';

class ResponseModel {
    constructor(value={}){
        this.retCode = '0000',
        this.retMsg = '',
        this.conect = {}
    }
} 

export {
    ResponseModel,
    SignModel,
    LoginModel
}