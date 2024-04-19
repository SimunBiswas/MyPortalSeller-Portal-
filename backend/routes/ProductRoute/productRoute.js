import express from "express";
import { deleteProduct } from "../../controllers/SellerControllers/ProductController/DeleteProductController.js";
import { addProduct } from "../../controllers/SellerControllers/ProductController/AddProductController.js";
import { getAllProducts } from "../../controllers/UserController/ProductController/getAllProductController.js";


const ProductRouter = express.Router()


ProductRouter.post('product/addproduct',addProduct)
ProductRouter.get('/product',getAllProducts)
ProductRouter.delete('product/deleteproduct/:id',deleteProduct)

export default ProductRouter
