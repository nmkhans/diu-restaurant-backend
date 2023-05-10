import express from "express";
import * as requestController from "../controllers/foodRequest.controller.js";

const router = express.Router();

//? place an request
router.post("/", requestController.placeRequest);

//? approve an request
router.patch("/", requestController.approveRequest);

//? get request list for user
router.get(
  "/all/:email",
  requestController.getRequestedFoodListForUser
);

//? get all requested Food
router.get("/all", requestController.getAllRequestedFood);

//? get requested food for user
router.get("/cafe/:name", requestController.getRequestedFoodByCafe);

//? decline request
router.delete("/:id", requestController.declineRequest);

export default router;
