import jwt from 'jsonwebtoken'
import secretKey from '../jwtConfig.js'



export const generateToken = (user)=> {
 const payload = {
    id:user_id,
    email:user.email,
    username:user.username,
 };
 return jwt.sign(payload,secretKey,{expiresIn:'1h'});
}


export const generaterefreshToken = (user)=> {
 const payload = {
    id:user_id,
    email:user.email,
    username:user.username,

 };
 return jwt.sign(payload,secretKey,{expiresIn:'7h'});
}





