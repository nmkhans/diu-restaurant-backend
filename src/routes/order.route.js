import express from "express";
import * as orderController from "../controllers/order.controller.js";

const router = express.Router();

//? place an order
router.post("/", orderController.placeOrder);

//? get all orders
router.get("/", orderController.allOrder);

//? get all order by user email
router.get("/:email", orderController.allOrdersByEmail);

//? get single order
router.get("/order-detail/:id", orderController.singleOrder);

//? update order status
router.patch("/update-status", orderController.updateOrderStatus);

export default router;
