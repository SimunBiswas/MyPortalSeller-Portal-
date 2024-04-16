// have to create seller model to save seller detail
// like contect number, shop address,gstnumber etc neccessery deatil

import mongoose from 'mongoose'



const SellerSchmea = new mongoose.Schema({
            
            ShopName:{
                type:String,
                reqired:true
            },
            ContactNumber:{
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