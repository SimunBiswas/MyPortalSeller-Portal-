// Import the Order model schema
import { Order } from "../../../Database/Models/CommonModel/OrderSchema.js";

// Controller function to create a new order
export const newOrder = async (req, res) => {
    try {
        // Destructure request body to extract order details
        const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice} = req.body;
        const userId = req.userId._id
        console.log(userId)
        // Create the new order using the Order model schema
        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            user:req.userId.id ,// Extracted from the JWT token
            paidAt: Date.now(), // Current timestamp
        });

        // Send success response with the created order
        res.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        // Log and handle any errors that occur during order creation
        console.error("Error creating order:", error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

// Controller function to retrieve a single order by its ID
export const getSingleOrder = async (req, res) => {
    try {
        // Extract the order ID from request parameters
        const orderId = req.params.id.trim();

        // Find the order by ID and populate user details
        const order = await Order.findById(orderId).populate('user', 'name email');

        // Check if the order exists
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'No order found',
            });
        }

        // Send success response with the retrieved order
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        // Log and handle any errors that occur during order retrieval
        console.error("Error fetching order:", error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

// Controller function to retrieve all orders for the logged-in user
export const myOrders = async (req, res) => {
    try {
        // Extract the user ID from the JWT token
        const userId = req.userData._id;

        // Find all orders associated with the user ID
        const orders = await Order.find({ user: userId });

        // Check if any orders were found
        if (!orders || orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Orders Found for the User",
            });
        }

        // Send success response with the retrieved orders
        res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        // Log and handle any errors that occur during order retrieval
        console.error("Error fetching orders:", error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
