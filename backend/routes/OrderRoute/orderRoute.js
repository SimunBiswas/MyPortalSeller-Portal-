
import express from "express";
import { getSingleOrder, myOrders, newOrder } from '../../controllers/UserController/ProductController/orderController.js'
import { allOrdersByAdmin, getSingleOrderByadmin } from '../../controllers/SellerControllers/ProductController/SellerOrdersController.js'






const Router = express.Router();

Router.post("/order/new",newOrder )
Router.get("/order/myorders",myOrders)
Router.get("/order/:id",getSingleOrder)
Router.get("/order/admin/allorders",allOrdersByAdmin)
Router.get("/order/admin/:id",getSingleOrderByadmin)




export default Router