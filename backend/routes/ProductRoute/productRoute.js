import express from "express";
import { deleteProduct } from "../../controllers/SellerControllers/ProductController/DeleteProductController.js";
import { addProduct } from "../../controllers/SellerControllers/ProductController/AddProductController.js";


const ProductRouter = express.Router()


ProductRouter.post('/addproduct',addProduct)

ProductRouter.delete('/deleteproduct/:id',deleteProduct)

export default ProductRouter