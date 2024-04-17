import mongoose from 'mongoose'



const SellerSchmea = new mongoose.Schema({
            
        
            Email:{
                type:String,
                reqired:true
            },
            ShopName:{
                type:String,
                reqired:true
            },
            ContactNumber:{
                type:String,
                reqired:true
            },
            Password:{
                type:String,
                reqired:true
            },
            ShopAddress:{
                type:String,
                reqired:true
            },
            GstNumber:{
                type:String,
                reqired:true
            },
            ShopOwnerName:{
                type:String,
                reqired:true
            },

})

export const Seller = mongoose.model("Seller", SellerSchmea)