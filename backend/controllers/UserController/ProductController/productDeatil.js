const Product = require('../../../Database/Models/CommonModel/productSchema')

exports.getProductDetails = async (req, resp) => {
    const product = await Product.find({_id: req.params.id})
    if(product){
        resp.status(200).json({
            success:true,
            message: "Product detail get success",
            product,
        })
    }
        else{
            resp.status(201).json({
                success:false,
                message: "Product detail can't get success"
            })
        }
    
}