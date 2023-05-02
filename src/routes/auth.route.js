import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

//? register a user
router.post("/", authController.register);

export default router;
