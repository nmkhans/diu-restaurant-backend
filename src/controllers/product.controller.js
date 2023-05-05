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

//? get single product
export const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Single product detail",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

//? get product by category
export const getProductByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;

    const products = await Product.find({ category: category });

    res.status(200).json({
      success: true,
      message: `Product for ${category} category`,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(id);

    const updatedDoc = {
      $set: data,
    };

    const result = await Product.updateOne({ _id: id }, updatedDoc);

    res.status(200).json({
      success: true,
      message: "Product updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Product.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Product deleted.",
      data: result
    })
  } catch (error) {
    next(error);
  }
};
