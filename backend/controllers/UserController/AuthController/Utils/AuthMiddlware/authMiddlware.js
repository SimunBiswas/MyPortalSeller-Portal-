import jwt from 'jsonwebtoken'
import secretKey from '../../jwtConfig';




export const AuthenticateToken = (req,res,next)=>{

    const authHeader = req.header('Authorization')
    if (!authHeader) {
        return res.status(401).json({
            message:"Unauthorized Missing Token"
        })
    }

    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({
            message:"Unauthorized Invalid Token Format"
        })
    }
    jwt.verify(token,secretKey, (err,user)=> {
        if (err) 
            return res.status(403).json({
                message:"Forbidden invalid Token"
            }) 
            req.user = user;
            next()
        
    })

}