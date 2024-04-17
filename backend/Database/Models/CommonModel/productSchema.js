
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  // Product name
  name: {
    type: String,
    required: true,
    trim: true
  },
  // Product description
  description: {
    type: String,
    required: true,
    trim: true
  },
  // Product price
  price: {
    type: Number,
    required: true,
    min: 0
  },
  // Product quantity
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  // Product category
  category: {
    type: String,
    required: true
    
  },
  // Product image URLs (at least one image required)
  images: {
    type: [String],
    required: true,
    validate: [arr => arr.length > 0, 'At least one image URL is required']
  },
  // Product brand
  brand: {
    type: String,
    trim: true
  },
  // Product model
  model: {
    type: String,
    trim: true
  },
  // Product specifications
  specifications: {
    type: Map,
    of: String
  },
  // Product ratings
  ratings: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  sellerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'seller'
  },
  // Product reviews
  reviews: [
    {
      // User ID who left the review
      userId: {
        type: _Schema.Types.ObjectId,
        ref: 'User'
      },
      // Review text
      text: {
        type: String,
        trim: true
      },
      // Review rating
      rating: {
        type: Number,
        min: 1,
        max: 5
      },
      // Review creation timestamp
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  // Product discount (if any)
  discount: {
    type: Number,
    default: 0,
    min: 0
  }
}, { timestamps: true });

export const Product = mongoose.model("Product",productSchema)
