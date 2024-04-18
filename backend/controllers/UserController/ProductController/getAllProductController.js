import {Product} from '../../../Database/Models/CommonModel/productSchema.js';
import ApiFeatures from '../../../utils/ApiFeatures.js';

export const getAllProducts = async (req, res) => {
    try {
        // Define the number of products per page
        const productsPerPage = 21;

        // Get the total count of products
        const totalProducts = await Product.countDocuments();

        // Create an instance of ApiFeatures to handle query filtering, searching, and pagination
        const apiFeatures = new ApiFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(productsPerPage);

        // Execute the query to retrieve products
        const products = await apiFeatures.query;

        // Send the response with products, total count, and products per page
        res.status(200).json({
            success: true,
            products,
            totalProducts,
            productsPerPage
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
