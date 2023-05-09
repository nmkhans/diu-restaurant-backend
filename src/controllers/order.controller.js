import Order from "../models/order.model.js";
import Product from "../models/product.model.js";

//? place an order
export const placeOrder = async (req, res, next) => {
  try {
    const data = req.body;

    const orderData = await Order.create(data);

    const orderedProductList = orderData?.products;
    orderedProductList.forEach(async (product) => {
      const orderedProduct = await Product.findOne({
        _id: product._id,
      });
      const orderedQuantity = product.quantity;
      const productPrevQuantity = orderedProduct.stock;
      const newStock = productPrevQuantity - orderedQuantity;

      await Product.updateOne(
        { _id: product._id },
        { $set: { stock: newStock } }
      );
    });


    res.status(201).json({
      success: true,
      message: "Order has been placed.",
      data: orderData,
    });
  } catch (error) {
    next(error);
  }
};

//? get all order by user email
export const allOrdersByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const data = await Order.find({ email: email });

    res.status(200).json({
      success: true,
      messages: "All orders",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

//? get all order list
export const allOrder = async (req, res, next) => {
  try {
    const result = await Order.find({});

    res.status(200).json({
      success: true,
      message: "All Order Data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? get single order
export const singleOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);

    const result = await Order.findOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Order detail",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//? update order status
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id, status } = req.query;
    console.log(status);

    const result = await Order.updateOne(
      { _id: id },
      { $set: { status: status } }
    );

    res.status(200).json({
      success: true,
      message: "status updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
