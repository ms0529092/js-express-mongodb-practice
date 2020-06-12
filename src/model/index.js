import SignModel from './sign-model.js';
import LoginModel from './login-model.js';

class ResponseModel {
    constructor(value = {}){
        this.retCode = value.retCode || '9999',
        this.retMsg = value.retMsg || 'other error',
        this.content = value.content || {};
    }
} 

export {
    ResponseModel,
    SignModel,
    LoginModel
}