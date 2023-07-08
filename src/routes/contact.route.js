import express from "express";
import * as contactController from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", contactController.createContactReq);

router.get("/", contactController.getContactMessage);

router.delete("/:id", contactController.deleteContactMessage);

export default router;
