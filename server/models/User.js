const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true ,unique: true },
    email_id: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    phone: { type: Number, required: true, unique: true },
    profile: { type: String, default:" "},
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;