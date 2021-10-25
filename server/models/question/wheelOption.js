const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wheelOptionSchema = new Schema({
    label: {type: String, required: true},
    value: {type: String, required: true}, // Value for doing this challenge
    question: {type: String, required: true},
})

module.exports = mongoose.model('WheelOption', wheelOptionSchema);
