import jwt from 'jsonwebtoken';
import {User} from '../Database/Models/UserDatabaseModel/userSchema.js';
import {Seller} from '../Database/Models/SellerDatabaseModels/sellerSchema.js';
import dotenv from 'dotenv'
dotenv.config()
// Middleware to check if user is authenticated
const requireAuth = (req, resp, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.secretKey, async (error, decodedToken) => {
            if (error) {
                return resp.status(401).json({ message: 'Unauthorized' });
            } else if (decodedToken) {
                req.userId = decodedToken.id; 
                console.log(decodedToken)
                next();
            }
        });
    } else {
        return resp.status(401).json({ message: 'can not get token' });
    }
};

// Middleware to check if user is a regular user
const checkUser = async (req, resp, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.secretKey, async (error, decodedToken) => {
            if (error) {
                resp.redirect('/login');
            } else if (decodedToken) {
                let user = await User.findById(decodedToken.id);
                req.userId = user;
                next();
            }
        });
    } else {
        resp.redirect('/login');
    }
};

// Middleware to check if user is a seller
const checkSeller = async (req, resp, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.secretKey, async (error, decodedToken) => {
            if (error) {
                resp.redirect('/seller/login');
            } else if (decodedToken) {
                let seller = await Seller.findById(decodedToken.id);
                req.sellerId = seller;
                next();
            }
        });
    } else {
        resp.redirect('/seller/login');
    }
};

export { requireAuth, checkUser, checkSeller };
