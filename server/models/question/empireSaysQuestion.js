const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empireSaysQuestionSchema = new Schema({
    question: {type: String, required: true},
    difficulty: {type: Number, min: 1, max: 5, required: true},
    answers: {type: [{
        answer: String,
        value: {type: Number, min: 1, max: 100}
      }],
      validate: [arrayLimit, '{PATH} exceeds the limit of 8'], required: true
    }
})

function arrayLimit(val) {
    return val.length <= 8;
  }

module.exports = mongoose.model('EmpireSaysQuestion', empireSaysQuestionSchema);
