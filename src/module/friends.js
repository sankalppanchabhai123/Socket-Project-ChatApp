import mongoose from "mongoose";

const friendRequestSchema = new mongoose.Schema({
    // Sender of the friend request
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Receiver of the friend request
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Request status
    status: {
        type: String,
        enum: ['pending', 'accepted'],
        default: 'pending'
    },

    // Message sent with the request (optional)
    // message: {
    //     type: String,
    //     maxlength: 200,
    //     default: ''
    // },

    // // Timestamps
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },

    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt
});

const FriendRequest = mongoose.model("friendrequest", friendRequestSchema);
export default FriendRequest;