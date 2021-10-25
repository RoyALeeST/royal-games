const express = require('express');
const router = express.Router();
const spinwheelCtrl = require('../../controllers/spinwheel/spinwheel');

// ================ GET ROUTES =====================
router.get('/get/all', spinwheelCtrl.getAllSpinWheelOptions);
router.get('/get/:id', spinwheelCtrl.findSpinWheelById)
// ================ POST ROUTES =====================
router.post('/post/new-spinwheel-option', spinwheelCtrl.createSpinWheelOption)
router.post('/post/new-multi-spinwheel-options', spinwheelCtrl.createMultipleSpinWheelOptions)

// ================ PATCH ROUTES =====================

// ================ DELETE ROUTES =====================

module.exports = router;