const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    emailAddress: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;