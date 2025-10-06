import express from "express"
import { getRecomandedUsers, getMyFriends, sendFriendReq, acceptFriendRequests, getFriendRequest, getOutgoingFriendReqs } from "../controllers/user.controller.js";
// import getMyFriends from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/Authentication.js";

const router = express.Router();
// router.use(protectRoute());

router.get("/", protectRoute, getRecomandedUsers)
// router.get("/friends", getMyFriends)
router.get("/friends", protectRoute, getMyFriends)

router.post("/friend-request/:id", sendFriendReq)
router.post("/friend-request/:id/accept", acceptFriendRequests)

router.get("/friend-requests", getFriendRequest)
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);
export default router;