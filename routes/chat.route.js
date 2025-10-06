import express from "express";
import { protectRoute } from "../middleware/Authentication.js";
import { getStreamToken } from "../controllers/chat.controller.js";
const router = express.Router();

router.get("/token", protectRoute, getStreamToken);
// router.get("/:id")

export default router;