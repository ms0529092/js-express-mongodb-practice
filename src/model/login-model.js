class LoginModel {
    constructor(value = {}){
        this.phone = typeof value.phone === 'string' ? value.phone : '' ;
        this.password = typeof value.password === 'string' ? value.password : '' ;
    }
}

export default LoginModel;