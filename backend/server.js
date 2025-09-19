// backend/server.js

require('dotenv').config();

const app = require('./src/app'); // Import app từ thư mục src
// const connectDB = require('./src/config/database'); // Bạn sẽ thêm cái này sau

const PORT = process.env.API_PORT || 5000;

// connectDB(); // Gọi hàm kết nối database
// Hướng dẫn chi tiết sẽ được cung cấp sau khi bạn hoàn thành việc tách file

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API URL: http://localhost:${PORT}`);
});