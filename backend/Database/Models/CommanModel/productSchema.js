const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' // User model 
            },
            text: String,
            rating: Number,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    offers: [
        {
            offerText: String,
            discount: Number, // Percentage discount
            validUntil: Date
        }
    ],
    // Additional fields like stock quantity, dimensions, etc. can be added here
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
