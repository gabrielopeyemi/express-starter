import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Users", UsersSchema);