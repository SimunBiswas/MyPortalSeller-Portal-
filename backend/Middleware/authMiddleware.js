import jwt from 'jsonwebtoken';
import {User} from '../Database/Models/UserDatabaseModel/userSchema.js';
import {Seller} from '../Database/Models/SellerDatabaseModels/sellerSchema.js';

// Middleware to check if user is authenticated
const requireAuth = (req, resp, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.secret_key, async (error, decodedToken) => {
            if (error) {
                resp.redirect('/login');
            } else if (decodedToken) {
                req.userData = decodedToken; // Assuming token contains necessary user data
                next();
            }
        });
    } else {
        resp.redirect('/login');
    }
};

// Middleware to check if user is a regular user
const checkUser = async (req, resp, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.secret_key, async (error, decodedToken) => {
            if (error) {
                resp.redirect('/login');
            } else if (decodedToken) {
                let user = await User.findById(decodedToken.userId);
                req.userData = user;
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
        jwt.verify(token, process.env.secret_key, async (error, decodedToken) => {
            if (error) {
                resp.redirect('/seller/login');
            } else if (decodedToken) {
                let seller = await Seller.findById(decodedToken.userId);
                req.userData = seller;
                next();
            }
        });
    } else {
        resp.redirect('/seller/login');
    }
};

export { requireAuth, checkUser, checkSeller };
