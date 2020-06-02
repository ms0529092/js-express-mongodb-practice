class SignModel {
    constructor(value = {}){
        this.phone = typeof value.phone === 'string' ? value.phone : '' ;
        this.password = typeof value.password === 'string' ? value.password : '' ;
        this.username = typeof value.username === 'string' ? value.username : '' ;
    }
}

export default SignModel;