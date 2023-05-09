import express from "express";
import * as requestController from "../controllers/foodRequest.controller.js";

const router = express.Router();

//? place an request
router.post("/", requestController.placeRequest);

//? approve an request
router.patch("/:id", requestController.approveRequest);

export default router;
