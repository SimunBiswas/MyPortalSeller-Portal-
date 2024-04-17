// have to creat model for user to store user information
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
  avatar: {
    type: String
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart'
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  billingAddresses: [{
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  }],
  shippingAddresses: [{
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  }],
  paymentMethods: [{
    type: String,
    enum: ['creditCard', 'paypal', 'applePay', 'googlePay']
  }],
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  otpSecret: {
    type: String,
    required: true
  },
  otpExpires: {
    type: Date,
    required: true
  }
}, { timestamps: true });



export const User = mongoose.model("User",userSchema)