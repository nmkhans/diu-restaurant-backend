import express from "express";
import * as statisticController from "../controllers/statistic.controller.js";

const router = express.Router();

router.get("/", statisticController.getStatistic);

export default router;
