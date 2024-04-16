// have to create logic for SellerOrder seller id and orderModel

const Order = require('../Models/orderModel');



exports.getSingleOrderByadmin = async (req, resp) => {
    try {
        const orderId = req.params.id.trim();
        const order = await Order.findById(orderId).populate('user', 'name email');

        if (!order) {
            return resp.status(404).json({
                success: false,
                message: 'No order found',
            });
        }

        resp.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        resp.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.allOrdersByAdmin = async (req, resp) => {
    try {
       

        const orders = await Order.find();

        if (!orders || orders.length === 0) {
            return resp.status(404).json({
                success: false,
                message: "No Orders Found for the User",
            });
        }
        



        resp.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        resp.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

