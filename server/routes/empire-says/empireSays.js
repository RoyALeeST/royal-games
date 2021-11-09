const express = require('express');
const router = express.Router();
const empireSaysController = require('../../controllers/empire-says/empireSays');

// ================ GET ROUTES =====================
router.get('/get/all', empireSaysController.getAllEmpireSaysQuestions);
router.get('/get/difficulty/:difficulty', empireSaysController.findEmpireSaysQuestionByDifficulty)
// ================ POST ROUTES =====================
router.post('/post/new-empire-says-question', empireSaysController.createEmpireSaysQuestion)
router.post('/post/new-multi-empire-says-questions', empireSaysController.createEmpireSaysQuestions)

// ================ PATCH ROUTES =====================

// ================ DELETE ROUTES =====================

module.exports = router;