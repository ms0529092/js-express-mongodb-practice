import jwt from 'jsonwebtoken';
import _ from 'lodash';

class JwtMiddlewares {
    constructor(value = {}){
        this.EXPIRESIN = (value.expiresIn || 3000) * 1000
        this.SECRET = 'YOUR_JWT_SECRET';
    }

    getJWTToken(data){
        return jwt.sign(data, this.SECRET, { expiresIn:this.EXPIRESIN });
    }

    verifyJWT(options = {}){
        const { tokenPath = 'cookies.token' } = options;
        let result;

        result = (req, res, next) => {
            const getTokenPath = _.get(req, tokenPath);
            
            this.verifyToken(getTokenPath)
                .then(()=>{
                    next();
                })
                .catch(next);
        }

        return result;
    }

    async verifyToken(value){
        if(!value){
            return Promise.reject('No JWT');
        }
        return jwt.verify(value, this.SECRET);
    }
    
}

export default JwtMiddlewares;