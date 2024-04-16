import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { dbConnection } from "./Database/DatabaseConnection/dbConnection.js";
import orders from "./routes/OrderRoute/orderRoute.js"
import ProductRouter from "./routes/ProductRoute/productRoute.js";

const app = express();

const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

//Routes
app.use('/api/v6', orders);

//Product Routes
app.use('/api/v6/',ProductRouter)



app.listen((PORT, ()=> console.log(`Server is Running On ${PORT}`)))


//Database Connection
dbConnection()

