// import cookies from "cookie-parser";
import jwt from "jsonwebtoken";
import "dotenv/config.js"
import User from "../module/user.js";
export async function protectRoute(req, res, next) {
    try {
        const currtoken = req.cookies.token;
        if (!currtoken) {
            return res.status(404).json({ Message: "failed to find token" })
        }
        const decode = jwt.verify(currtoken, process.env.JWT_SECRET_KEY);
        if (!decode) {
            return res.status(401).json({ message: "Unauthorized - Invalide token" })
        }
        const user = await User.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" })
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.error("Authentication is neede!", error);
    }
}