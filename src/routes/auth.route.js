import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

//? register a user
router.post("/register", authController.register);

//? login a user
router.post("/login", authController.login);

//? get all user
router.get("/users/all", authController.getAllUser);

//? promote user to admin
router.patch(
  "/user/promote-to-admin/:id",
  authController.promoteUserToAdmin
);

//? promote a user to teacher
router.patch(
  "/user/promote-to-teacher/:id",
  authController.promoteToTeacher
);

//? promote user to manager
router.patch(
  "/user/promote-to-manager/:id",
  authController.promoteToManager
);

export default router;
