import express from "express";
import * as statusController from "../controllers/status.controller.js";

const router = express.Router();

//? get user dashboard status
router.get("/dashboard/user", statusController.userDashboardStatus);

export default router;
