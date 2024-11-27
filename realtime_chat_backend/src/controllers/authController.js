const jwt = require('jsonwebtoken');
const userOps = require('../models/user_operation.js'); // 引入user_operations模块

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValid = await userOps.verifyUser(email, password); // 调用user_operations中的函数

    if (!isValid) {
      return res.status(404).json({ success: false, message: '邮箱不存在或密码错误' });
    }

    // 如果验证成功，继续创建JWT令牌
    // const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true});
    // res.json({ success: true, token: token });
  } catch (error) {
    console.error('登录请求失败:', error);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
};