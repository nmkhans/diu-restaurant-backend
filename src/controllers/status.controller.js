import Order from "../models/order.model.js";

export const userDashboardStatus = async (req, res, next) => {
  try {
    const { email, status } = req.query;

    const resData = await Order.find({
      email: email,
      status: status,
    });

    res.status(200).json({
      success: true,
      message: "Dashboard data",
      data: resData,
    });
    
  } catch (error) {
    next(error);
  }
};
