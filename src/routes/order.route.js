import express from "express";
import * as orderController from "../controllers/order.controller.js";

const router = express.Router();

//? place an order
router.post("/", orderController.placeOrder);

export default router;
