const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: { type: String, required: true, unique:true },
    desc: { type: String},
    img: { type: String },
    imgsm: { type: String },
    img_title: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    duration: { type: String },
    genre: { type: String },
    isSeries: { type: String, default: false }


}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;