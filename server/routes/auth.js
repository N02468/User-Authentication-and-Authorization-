
const express = require('express');
const router = express.Router();
const { authenticate, checkRole } = require('../middleware/authMiddleware');
const { getAdminData } = require('../controllers/adminController'); // <== Add this
const { registerUser, loginUser } = require('../controllers/authController');


// Signup
router.post('/register',registerUser);

// Login
router.post('/login', loginUser);
// Only accessible by logged-in admins
router.get('/admin-data', authenticate, checkRole('admin'), getAdminData);
module.exports = router;
