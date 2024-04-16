const express = require("express");
const { newOrder, myOrders, getSingleOrder } = require("../../controllers/UserController/ProductController/orderController");
const { allOrdersByAdmin, getSingleOrderByadmin } = require("../../controllers/SellerControllers/ProductController/SellerOrdersController");

const Router = express.Router();

Router.route("/order/new").post(newOrder)
Router.route("/order/myorders").get(myOrders)
Router.route("/order/:id").get(getSingleOrder)
Router.route("/order/admin/allorders").get(allOrdersByAdmin)
Router.route("/order/admin/:id").get(getSingleOrderByadmin)



module.exports = Router