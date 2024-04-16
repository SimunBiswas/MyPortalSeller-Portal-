const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // Shipping information
    shippingInfo: {
        address: {
            type: String,
            required: [true, "Please provide your shipping address"]
        },
        city: {
            type: String,
            required: [true, "Please provide your shipping address"]
        },
        state: {
            type: String,
            required: [true, "Please provide your shipping address"]
        },
        country: {
            type: String,
            required: [true, "Please provide your shipping address"]
        },
        pinCode: {
            type: Number,
            required: true
        },
        phoneNo: {
            type: Number,
            required: true
        }
    },
    // Ordered items
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            }
        }
    ],
    // User who placed the order
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Payment information
    paymentInfo: {
        id: {
            type: String,
            required: true
        },
        method: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: "Pending"
        }
    },
    // Date of payment
    paidAt: {
        type: Date,
        required: true
    },
    // Prices
    itemsPrice: {
        type: Number,
        default: 0
    },
    taxPrice: {
        type: Number,
        default: 0
    },
    shippingPrice: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    // Order status
    orderStatus: {
        type: String,
        required: true,
        default: "Processing"
    },
    // Date when the order was delivered
    deliveredAt: {
        type: Date
    },
    // Date when the order was created
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);
