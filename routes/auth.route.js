// const express = require("express");
import express from "express";
import jwt from "jsonwebtoken";
import User from "../module/user.js"
// import checkUserpresentinDB from "../module/user.js"
import { upsertStreamUser } from "../lib/stream.js"
import { protectRoute } from "../middleware/Authentication.js";
import { getfrindereq, getoutgoingfriendreq, login, logout, onboarding, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/signup", signup)
router.post("/signin", signin)
router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboarding)

router.get("/getfriendrequest", protectRoute, getfrindereq);

router.get("/getOutgoingFriendReqs", getoutgoingfriendreq);
router.get("/me", protectRoute, (res, req) => {
    res.status(200).json({ success: true, user: req.user })
    // note that this user name is same as when you
    // access in your frontend
});
export default router;