import express from "express";
import * as paymentController from "../controllers/payment.controller.js";

const router = express.Router();

//? make payment
router.post("/", paymentController.makePayment);

export default router;
