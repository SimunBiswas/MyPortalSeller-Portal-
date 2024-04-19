import {Product} from '../../../Database/Models/CommonModel/productSchema.js'

export const editProduct = async (req, res) => {
    try {
        // Find the product by ID
        let product = await Product.findById(req.params.id);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Update the product with the request body data
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        // Send the updated product as a response
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error("Error editing product:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
