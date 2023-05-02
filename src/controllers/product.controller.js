import Product from "../models/product.model.js";

//? create a product
export const createProduct = async (req, res, next) => {
  try {
    const data = req.body;

    const product = await Product.create(data);

    res.status(200).json({
      success: true,
      message: "Product created.",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

//? get all products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      message: "All product data",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
