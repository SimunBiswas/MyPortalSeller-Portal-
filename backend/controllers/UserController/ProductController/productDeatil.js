import {Product} from '../../../Database/Models/CommonModel/productSchema';

export const getProductDetails = async (req, res) => {
    try {
        // Find the product by ID
        const product = await Product.findById(req.params.id);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Respond with the product details
        res.status(200).json({
            success: true,
            message: "Product details retrieved successfully",
            product
        });
    } catch (error) {
        console.error("Error fetching product details:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
