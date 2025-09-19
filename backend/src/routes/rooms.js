const express = require('express');
const requireAuth = require('../middleware/auth');
const router = express.Router();

// Route này sẽ yêu cầu xác thực
router.get('/', requireAuth, (req, res) => {
    // Logic lấy danh sách phòng chỉ dành cho người dùng đã đăng nhập
    res.json({ message: 'Danh sách phòng' });
});

module.exports = router;