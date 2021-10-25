const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const millionaireQuestionSchema = new Schema({
    question: {type: String, required: true},
    difficulty: {type: Number, min: 1, max: 10, required: true},
    correctAnswer: {type: String, required: true},
    invalidAnswers: {type: [{
        type: String
      }],
      validate: [arrayLimit, '{PATH} exceeds the limit of 3']},
})

function arrayLimit(val) {
    return val.length <= 3;
  }

module.exports = mongoose.model('MillionaireQuestion', millionaireQuestionSchema);
