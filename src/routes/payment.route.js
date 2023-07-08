import express from "express";
import * as paymentController from "../controllers/payment.controller.js";

const router = express.Router();

//? make payment
router.post("/", paymentController.makePayment);

router.get("/:transactionId", paymentController.verifyPayment);

router.post("/cod/:id", paymentController.cashPayment);

export default router;
