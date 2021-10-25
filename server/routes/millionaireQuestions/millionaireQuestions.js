const express = require('express');
const router = express.Router();
const millionaireQuestionsCtrl = require('../../controllers/millionaireQuestions/millionaireQuestionsController');

// ================ GET ROUTES =====================
router.get('/get/all', millionaireQuestionsCtrl.getAllMillionaireQuestions);
router.get('/get/difficulty/:difficulty', millionaireQuestionsCtrl.findMillionaireQuestionByDifficulty)
// ================ POST ROUTES =====================
router.post('/post/new-millionaire-question', millionaireQuestionsCtrl.createQuestion)
router.post('/post/new-multi-millionaire-questions', millionaireQuestionsCtrl.createQuestions)

// ================ PATCH ROUTES =====================

// ================ DELETE ROUTES =====================

module.exports = router;