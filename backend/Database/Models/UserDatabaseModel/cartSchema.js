// have to create cart model like product deatil,userid, etc
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  }]
}, { timestamps: true });

export default mongoose.model('Cart', cartSchema);
