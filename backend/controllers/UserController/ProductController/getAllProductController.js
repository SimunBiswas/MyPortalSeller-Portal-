const Product = require('../../../Database/Models/CommonModel/productSchema')
const Apifeatures = require('../../../utils/ApiFeatures')
exports.getAllproducts = async (req, resp) => {
    const resultParPage = 21;
    const totalProduct = await Product.countDocuments();
    const apiFeatures = new Apifeatures(Product.find(), req.query)
    .search().
    filter().pagination(resultParPage);
    const product = await apiFeatures.query;
    resp.status(200).json({
        message: true,
        product,
        totalProduct,
        resultParPage
    });
};