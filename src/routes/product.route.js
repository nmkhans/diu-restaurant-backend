import express from "express";
import * as productController from "../controllers/product.controller.js";

const router = express.Router();

//? create a product
router.post("/", productController.createProduct);

//? get all products
router.get("/", productController.getProducts);

export default router;
