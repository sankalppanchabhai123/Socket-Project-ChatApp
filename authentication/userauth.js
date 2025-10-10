import jwt from "jsonwebtoken"
import "dotenv/config"
import { use } from "react"
const createatokenforuser = (user) => {
    const payload = {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        bio: user.bio,
        ProfilePic: user.ProfilePic,
        friends: user.friends
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    return token;
}

const checkforauthentication = (token) => {
    const check = jwt.verify(token, secretkey);
    return check;
}

module.exports = {
    createatokenforuser,
    checkforauthentication,
}