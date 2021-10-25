const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    secondLastName: {type: String, required: true},
    address: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    credits: [{type: Schema.Types.Mixed}],          // Credits requested by and for this user
})

module.exports = mongoose.model('User', userSchema);
