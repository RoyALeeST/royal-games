const express = require('express');
const router = express.Router();
const customerCtrl = require('../../controllers/customer/customer');

// ================ GET ROUTES =====================
router.get('/get/all',customerCtrl.getAllCustomers);
router.get('/get/:id',customerCtrl.findCustomerById);


// ================ POST ROUTES =====================
router.post('/post/new-customer/', customerCtrl.createCustomer);
// ================ PATCH ROUTES =====================

// ================ DELETE ROUTES =====================

module.exports = router;