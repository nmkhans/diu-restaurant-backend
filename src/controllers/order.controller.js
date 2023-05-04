import Order from "../models/order.model.js";

//? place an order
export const placeOrder = async (req, res, next) => {
  try {
    const data = req.body;

    const orderData = await Order.create(data);

    res.status(201).json({
      success: true,
      message: "Order has been placed.",
      data: orderData,
    });
  } catch (error) {
    next(error);
  }
};
