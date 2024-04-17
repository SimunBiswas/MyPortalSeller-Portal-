// have to creating logic for deleteproduct using Prodect model

import { Product } from "../../../Database/Models/CommonModel/productSchema";

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // Checking product is exists or Not For Delete

    const CheckProduct = await Product.findById(id);
    if (!CheckProduct) {
      return res.status(400).json({ message: "Product Not exists" });
    }

    await CheckProduct.deleteOne();
    res.status(200).json({
      success: true,
      message: "Product deleted!",
    });
  } catch (error) {
    console.error("Error In Delete product API", error);
    res.status(500).json({ message: "Failed to Delete product" });
  }
};
