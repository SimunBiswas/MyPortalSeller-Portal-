import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { dbConnection } from "./Database/DatabaseConnection/dbConnection.js";
import seller from './routes/SellerRoute/sellerRoute.js'
import user from './routes/UserRoute/userRoute.js'
import cookieParser from 'cookie-parser';
import order from './routes/OrderRoute/orderRoute.js'
import ProductRouter from "./routes/ProductRoute/productRoute.js";

const app = express();
app.use(cookieParser(
    {
        origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add more methods as needed
    allowedHeaders: ['Content-Type', 'Authorization'],
    }
));
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

// CORS settings
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add more methods as needed
    allowedHeaders: ['Content-Type', 'Authorization'], // Add more headers as needed
}));

// Routes
app.use('/api/v6', user)
app.use('/api/v6', seller)
app.use('/api/v6', order)
app.use('/api/v6', ProductRouter)


app.listen((PORT, ()=> console.log(`Server is Running On ${PORT}`)))


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Database Connection
dbConnection();
