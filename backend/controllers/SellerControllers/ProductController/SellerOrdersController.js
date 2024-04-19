// have to create logic for SellerOrder seller id and orderModel

import { Order } from "../../../Database/Models/CommonModel/OrderSchema.js";



//get info for single order by admin
export const getSingleOrderByadmin = async (req, res) => {
    try {
        //extracting id info from parameters
        const orderId = req.params.id.trim();
        //populating the respective order with user info
        const order = await Order.findById(orderId).populate('user', 'name email');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'No order found',
            });
        }

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//get info for all orders by admin
export const allOrdersByAdmin = async (req, res) => {
    try {

        //fetching info for all the orders
        const orders = await Order.find();

        if (!orders || orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Orders Found for the User",
            });
        }

        res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

