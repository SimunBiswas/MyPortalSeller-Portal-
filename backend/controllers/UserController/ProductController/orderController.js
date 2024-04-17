// Import the Order model schema
const Order = require('../../../Database/Models/CommanModel/OrderSchema');

// Controller function to create a new order
exports.newOrder = async (req, resp) => {
    try {
        // Destructure request body to extract order details
        const { shippingInfo, orderItem, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
        
        // Check if all required fields are present
        if (!shippingInfo || !orderItem || !paymentInfo || !itemsPrice || !taxPrice || !shippingPrice || !totalPrice) {
            return resp.status(400).json({
                success: false,
                message: 'Please provide all necessary order details',
            });
        }

        // Create the new order using the Order model schema
        const order = await Order.create({
            shippingInfo,
            orderItem,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            user: req.userData.id, // Extracted from the JWT token
            paidAt: Date.now(), // Current timestamp
        });

        // Send success response with the created order
        resp.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        // Log and handle any errors that occur during order creation
        console.error("Error creating order:", error);
        resp.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

// Controller function to retrieve a single order by its ID
exports.getSingleOrder = async (req, resp) => {
    try {
        // Extract the order ID from request parameters
        const orderId = req.params.id.trim();
        
        // Find the order by ID and populate user details
        const order = await Order.findById(orderId).populate('user', 'name email');

        // Check if the order exists
        if (!order) {
            return resp.status(404).json({
                success: false,
                message: 'No order found',
            });
        }

        // Send success response with the retrieved order
        resp.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        // Log and handle any errors that occur during order retrieval
        console.error("Error fetching order:", error);
        resp.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

// Controller function to retrieve all orders for the logged-in user
exports.myOrders = async (req, resp) => {
    try {
        // Extract the user ID from the JWT token
        const userId = req.userData._id;
        
        // Find all orders associated with the user ID
        const orders = await Order.find({ user: userId });

        // Check if any orders were found
        if (!orders || orders.length === 0) {
            return resp.status(404).json({
                success: false,
                message: "No Orders Found for the User",
            });
        }

        // Send success response with the retrieved orders
        resp.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        // Log and handle any errors that occur during order retrieval
        console.error("Error fetching orders:", error);
        resp.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
