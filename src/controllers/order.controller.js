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

//? get all order by user email
export const allOrders = async (req, res, next) => {
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
