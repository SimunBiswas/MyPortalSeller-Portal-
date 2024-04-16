// logic to addproduct using Prodect model


const Product = require('../../../Database/Models/CommonModel/productSchema');

const addProduct = async (req, res) => {
    try {
        const { name, description, price, brand, category, image, rating, comments, offers } = req.body;

        // Checking if the product already exists
        const existingProduct = await Product.findOne({ name });
        if (existingProduct) {
            return res.status(400).json({ message: 'Product already exists' });
        }

        const newProduct = new Product({
            name,
            description,
            price,
            brand,
            category,
            image,
            rating,
            comments,
            offers
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

module.exports = { addProduct };
