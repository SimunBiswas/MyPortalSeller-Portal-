import { Product } from "../../../Database/Models/CommonModel/productSchema.js";
import cloudinary from 'cloudinary'

export const addProduct = async (req, res) => {
    try {

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                message:'Product image Required'
            })
        }

        const {images} = req.files;
        const allowedFormats = ["image/jpg", "image/jpeg", "image/webp"];

        if (!allowedFormats.includes(images.mimetype)) {
            return res.status(400).json({
                message: "Inavlid File Type, Only JPG ,PNG,WEBP Formats are Allowed",
            })
        }
        // Extracting required fields from request body
        const { productName, description, price, quantity, category,  brand, specifications,discount } = req.body;

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
            brand,
            specifications,
            
            discount
        });

        const cloudinaryResponse = await cloudinary.v2.uploader.upload(
            images.tempFilePath
        )
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.error("cloudinary error");
        }

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
