import mongoose from "mongoose";
import "dotenv/config"
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`)
    } catch (error) {
        console.log("MongoDB fail to connect!!!!!!")
        process.exit(1);
    }
}


// module.export = connectDB;