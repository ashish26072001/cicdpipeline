import express from "express";
const router = express.Router();
import controller from "./controller.js";
router.get("/", controller);

export default router;