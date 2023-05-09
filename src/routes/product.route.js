import express from "express";
import * as productController from "../controllers/product.controller.js";

const router = express.Router();

//? create a product
router.post("/", productController.createProduct);

//? get all products
router.get("/", productController.getProducts);

//? get single product
router.get("/:id", productController.getSingleProduct);

//? get product by cafe
router.get("/cafe/:name", productController.getProductByCafe);

//? get product by category
router.get(
  "/category/:category",
  productController.getProductByCategory
);

//? update a product
router.patch("/:id", productController.updateProduct);

//? delete a product
router.delete("/:id", productController.deleteProduct);

export default router;
