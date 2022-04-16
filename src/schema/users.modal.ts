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

    email: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Users", UsersSchema);