import express from "express";
import { deleteProduct } from "../../controllers/SellerControllers/ProductController/DeleteProductController.js";
import { addProduct } from "../../controllers/SellerControllers/ProductController/AddProductController.js";
import { getAllProducts } from "../../controllers/UserController/ProductController/getAllProductController.js";
import { checkSeller, requireAuth } from "../../Middleware/authMiddleware.js";


const ProductRouter = express.Router()


ProductRouter.post('/seller/product/addproduct',requireAuth,checkSeller,addProduct)
ProductRouter.get('/product',getAllProducts)
ProductRouter.delete('product/deleteproduct/:id',deleteProduct)

export default ProductRouter
