const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    genre: { type: String, required: true },
    content: { type: Array },
    
}, {
    timestamps: true,
});

const List = mongoose.model('List', listSchema);

module.exports = List;