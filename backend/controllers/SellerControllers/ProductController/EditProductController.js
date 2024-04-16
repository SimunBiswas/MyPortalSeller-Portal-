// have to creating logic for addproduct using Prodect model
const Product = require('../../../Database/Models/CommonModel/productSchema')

exports.editProduct = async(req,resp)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        resp.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
     product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
     })
     resp.status(200).json({
        success:true,
        product
     })
};