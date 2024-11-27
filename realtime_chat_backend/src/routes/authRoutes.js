const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 登录路由
router.post('/loginPage/login', authController.login);

module.exports = router;