// have to creat model for user to store user information
import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    sellerName: {
      type: String,
      required: true
    },
    sellerBio: {
      type: String
    },
    sellerLogo: {
      type: String
    },
    sellerBanner: {
      type: String
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String
    },
    contactNumber: {
      type: String
    },
    verificationStatus: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending'
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
    orders: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }],
    role: {
      type: String,
      enum: ['seller', 'admin'],
      default: 'seller'
    }
  }, { timestamps: true });
