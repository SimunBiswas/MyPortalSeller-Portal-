import { Product } from "../../../Database/Models/CommonModel/productSchema.js";

export const addProduct = async (req, res) => {
    try {
        // Extracting required fields from request body
        const { productName, description, price, quantity, category, images, brand, specifications,discount } = req.body;

        // Assuming sellerId is available in the request object (e.g., from authentication middleware)
        const  sellerId  = req.sellerId.id
        console.log(sellerId)
        // Creating a new product instance
        const newProduct = new Product({
            sellerId,
            productName,
            description,
            price,
            quantity,
            category,
            images,
            brand,
            specifications,
            
            discount
        });

        // Saving the new product to the database
        await newProduct.save();

        // Sending success response
        res.status(201).json({ message: 'Product added successfully', product: newProduct });

    } catch (error) {
        // Handling errors
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product' });
    }
};
