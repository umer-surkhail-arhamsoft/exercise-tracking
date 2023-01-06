const mongoose = require("mongoose");
const userScema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: String,
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("User", userScema)
