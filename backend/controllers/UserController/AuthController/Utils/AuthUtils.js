import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



export const generateToken = (user)=> {
 const payload = {
    id:user
 };
 return jwt.sign(payload,process.env.secretKey,{expiresIn:'1h'});
}


export const generaterefreshToken = (user)=> {
 const payload = {
    id:user

 };
 return jwt.sign(payload,process.env.secretKey,{expiresIn:'7h'});
}





