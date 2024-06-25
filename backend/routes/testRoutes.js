// src/routes/testRoutes.js
// module.exports = router;

const express = require('express');
const router = express.Router();
// const adminController = require('../controllers/adminController');
const testController = require('../controllers/testController');

// Admin routes
// router.post('/register', adminController.registerUser);
// router.put('/verify/:userId', adminController.verifyUser);

// Test routes
router.post('/create-test', testController.createTest);
router.post('/submit-response', testController.submitResponse);
router.get('/tests', testController.getAllTests);
router.get('/test/:testId', testController.getTestById);

module.exports = router;

