const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const customerSchema = new Schema({
    ...User.schema.obj,
    reputation: {type: Number, required: true},
})

module.exports = mongoose.model('Customer',customerSchema)