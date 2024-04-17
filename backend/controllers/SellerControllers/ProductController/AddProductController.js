// logic to addproduct using Prodect model

import { Product } from "../../../Database/Models/CommonModel/productSchema.js";


export const addProduct = async (req, res) => {
    try {
        const { sellerId, name, description, price, quantity, category, images, brand, model, specifications, ratings, reviews, discount } = req.body;

        const newProduct = new Product({
            sellerId,
            name,
            description,
            price,
            quantity,
            category,
            images,
            brand,
            model,
            specifications,
            ratings,
            reviews,
            discount
        });

        // Saving the new product to the database
        await newProduct.save();

        //these are template responses and can be modified for purpose
        res.status(201).json({ message: 'Product added successfully', product: newProduct });

    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product' });
    }
};
