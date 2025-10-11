import express from "express";
import { generateFileName, StreamChat } from "stream-chat";
import "dotenv/config"

const aipkey = process.env.API_KEY;
const secretkey = process.env.SECRET_KEY;

if (!aipkey || !secretkey) {
    console.error("ApiKey or Secret key is missing");
}

const streamClient = StreamChat.getInstance(aipkey, secretkey)

export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUser([userData]);
        return userData;
    } catch (err) {
        console.error("Error Occure to user while enter in stream", err);
    }
}

export const generateStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error("internal server error", error)
        res.status(500).json({ message: "Internal server error" })
    }
}



// module.exports = {
//     upsertStreamUser,
// };