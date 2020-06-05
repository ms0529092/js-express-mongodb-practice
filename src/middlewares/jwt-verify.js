import jwt from 'jsonwebtoken';
import _ from 'lodash';
class JwtVerify {
    constructor(){
        this.SECRET = 'YOUR_JWT_SECRET';
    }

    verifyJWT(options = {}){
        const { tokenPath = 'cookies.token' } = options;
        let result;

        result = (req, res, next) => {
            // console.log(_.get(req, tokenPath));
            this.verifyToken()
                .then((decoded)=>{
                    console.log(decoded);
                    next();
                })
                .catch(next);
        }

        return result;
    }

    verifyToken(value){
        if(!value){
            return Promise.reject('No JWT');
        }

        return jwt.verify(jwt, this.SECRET);
    }
    
}

export default JwtVerify;