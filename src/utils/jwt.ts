import { jwtSecret } from './../../config/serverConfig';
const jwt = require('jsonwebtoken');


    export const generateJWTToken = (details: any) => {
        return jwt.sign(details, jwtSecret)
    }

    export const verifyJWTToken = (token: string) => {
        console.log(token)
        jwt.verify(token, jwtSecret, (err: any, details: any)=>{
            console.log({ err, details })
            if (err) return err;

            return details;
        })
    }
