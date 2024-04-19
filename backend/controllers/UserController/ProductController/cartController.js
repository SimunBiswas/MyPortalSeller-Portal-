import Cart from '../../../Database/Models/UserDatabaseModel/cartSchema';

// Add a product to the cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity, color, size } = req.body;
    const userId = req.user._id; // Assuming you have authenticated the user and stored the user ID in req.user._id

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    // If the cart doesn't exist, create a new one
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product already exists in the cart
    const existingProductIndex = cart.items.findIndex(
      (item) =>
        item.productId.toString() === productId &&
        item.color === color &&
        item.size === size
    );

    if (existingProductIndex !== -1) {
      // If the product with the same color and size exists, update its quantity
      cart.items[existingProductIndex].quantity += quantity;
    } else {
      // If the product with the same color and size doesn't exist, add it to the cart
      cart.items.push({ productId, quantity, color, size });
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Cart updated successfully', cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a product from the cart
export const deleteFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id; // Assuming you have authenticated the user and stored the user ID in req.user._id

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove all instances of the product from the cart
    const updatedItems = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    cart.items = updatedItems;

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
