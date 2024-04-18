import bcrypt from 'bcrypt'
import { Seller } from '../../../../Database/Models/SellerDatabaseModels/sellerSchema.js'

import { generaterefreshToken } from '../../../UserController/AuthController/Utils/AuthUtils.js'


export const SellerSignUP = async(req,res)=>{
           try {
            const {Email,Password,ShopName,ContactNumber,ShopAddress,GstNumber,ShopOwnerName} = req.body

            const CheckUser = Seller.findOne({Email ,GstNumber})
            if (CheckUser) {
                res.status(401).json({
                  message:"User Already Exist"
                })
            }
            
        const HashedPassword = await bcrypt.hash(Password,10);
       
        
        const SavedUser = await User.updateOne({
            Email:Email
          }, {$set :{
              ShopName:ShopName,
              password:HashedPassword,
              ContactNumber:ContactNumber,
              ShopAddress:ShopAddress,
              GstNumber:GstNumber,
              ShopOwnerName:ShopOwnerName

          } })
          const SavedSeller = await User.findOne({ Email: Email })('-password');
          const token = generaterefreshToken(SavedSeller)
          res.cookie('jwt', token, { httpOnly: true, secure: true });
       res.status(201).json({
        message:'Seller Created SuccessFully', seller:SavedSeller
       })
       
       
           } catch (error) { 
              res.status(400).json({
                message:"Error in User Seller SignUP API",
                error
              })
           }
}