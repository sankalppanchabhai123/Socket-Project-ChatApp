
import mongoose from "mongoose";
// import { Profiler } from "react";
import bcryptjs from "bcryptjs"

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: "",
    },
    ProfilePic: {
        type: String,
        default: "",
    },
    isOnboarded: {
        type: Boolean,
        default: false,
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ],
}, { timestamps: true })

UserSchema.pre("save", async function (next) {
    // const user = this;
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcryptjs.genSalt(10);
        this.password = await bcryptjs.hash(this.password, salt);
    } catch (err) {
        next(err)
        console.log("error at the time of password saving..");
    }
})

UserSchema.methods.matchPassword = async function (enterdPassword) {
    const isPasswordCorrect = await bcryptjs.compare(enterdPassword, this.password);
    return isPasswordCorrect;
}
const User = mongoose.model('User', UserSchema);
// module.exportes = User;
export default User;