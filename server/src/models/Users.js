const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userName:{type: String, required: true},
    userAge:{type: String, required: true},
    created_at: {type: Date, default: new Date()},
})

module.exports = mongoose.model("User", schema)
// const User = new mongoose.Schema ({
// userName:{type: String, required: true},
// userAge:{type: String, required: true},
// });

// export const UserModel = mongoose.model('User', User);