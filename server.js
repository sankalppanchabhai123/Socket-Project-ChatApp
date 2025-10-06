import cookieParser from "cookie-parser"
import express, { request } from "express"
import "dotenv/config"
import cors from "cors";
import mongoose from "mongoose"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import chatRoute from "./routes/chat.route.js"
// import { connectDB } from "./lib/db.js"
// mongoose.connect("")
mongoose.connect(process.env.MONGODB_URL)
    .then((e) => console.log("mongodb is connected"));

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Welcome to chat app")
})

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/app/users", userRoute);
app.use("/app/chat", chatRoute);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    // connectDB()
    //     .then(() => {
    //         app.listen(PORT, () => {
    //             console.log(`server is running on port ${PORT}`);
    //         });
    //     })
    //     .catch((err) => {
    //         console.error("Failed to connect to MongoDB:", err);
    //         process.exit(1);
    //     });
})