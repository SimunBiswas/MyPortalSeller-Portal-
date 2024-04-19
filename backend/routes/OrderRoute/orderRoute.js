
import express from "express";
import { getSingleOrder, myOrders, newOrder } from '../../controllers/UserController/ProductController/orderController.js'
import { allOrdersByAdmin, getSingleOrderByadmin } from '../../controllers/SellerControllers/ProductController/SellerOrdersController.js'
import { checkUser, requireAuth } from "../../Middleware/authMiddleware.js";






const Router = express.Router();

Router.post("/user/order/new",requireAuth,checkUser ,newOrder )
Router.get("/user/order/myorders",myOrders)
Router.get("/user/order/:id",getSingleOrder)
Router.get("/order/admin/allorders",allOrdersByAdmin)
Router.get("/order/admin/:id",getSingleOrderByadmin)




export default Router