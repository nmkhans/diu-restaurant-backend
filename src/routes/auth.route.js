import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

//? register a user
router.post("/register", authController.register);

//? login a user
router.post("/login", authController.login);

//? get all user
router.get("/users/all", authController.getAllUser);

//? promote user
router.patch("/user/promote/:id", authController.promoteUser);

export default router;
