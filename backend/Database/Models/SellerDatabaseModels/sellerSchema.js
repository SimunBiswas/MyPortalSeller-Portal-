import mongoose from 'mongoose'



const SellerSchmea = new mongoose.Schema({
            
        
            email:{
                type:String,
                reqired:true
            },
            otp: {
                type: Number,
                
              },
              avatar: {
                type: String
              },
              otpExpires: {
                type: Date,
                required: true
              },
              contactNumber:{
                type:String,
                reqired:true
            },
            contactNumber:{
                type:String,
                reqired:true
            },
            password:{
                type:String,
                reqired:true
            },
            shopAddress:{
                type:String,
                reqired:true
            },
            gstNumber:{
                type:String,
                reqired:true
            },
            shopOwnerName:{
                type:String,
                reqired:true
            },
<<<<<<< Updated upstream
            shopName:{
                type:String,
                
            },
=======
           
>>>>>>> Stashed changes

})

export const Seller = mongoose.model("Seller", SellerSchmea)