import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

//? register a user
router.post("/register", authController.register);

//? login a user
router.post("/login", authController.login);

export default router;
