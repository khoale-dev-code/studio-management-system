# 🏢 Studio Management System

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=electron&logoColor=white" alt="Electron" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  
  <h3>🎯 Hệ thống quản lý studio cho thuê chuyên nghiệp</h3>
  <p><em>Giải pháp toàn diện cho việc quản lý phòng studio, thiết bị, khách hàng và hóa đơn</em></p>
  
  <p>
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-tính-năng">Tính Năng</a> •
    <a href="#-cài-đặt">Cài Đặt</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-api-docs">API Docs</a>
  </p>
</div>

---

## 🚀 Quick Start

Chỉ cần **3 bước** để chạy dự án:

```bash
# 1️⃣ Clone repository
git clone https://github.com/khoale-dev-code/studio-management-system.git
cd studio-management-system

# 2️⃣ Cài đặt dependencies
npm run install:all

# 3️⃣ Khởi động ứng dụng
npm run dev
```

**🎉 Hoàn thành!** Ứng dụng sẽ chạy tại:
- 🌐 **Frontend**: http://localhost:3000
- 🔌 **Backend API**: http://localhost:5000

---

## ✨ Tính Năng

### 🏠 Quản Lý Phòng Studio
- 📋 Danh sách phòng với thông tin chi tiết
- 📷 Upload và quản lý hình ảnh phòng
- 🔄 Tracking tình trạng phòng real-time
- 💰 Thiết lập giá theo từng phòng

### 🎛️ Quản Lý Thiết Bị
- 📊 Catalog thiết bị đầy đủ
- 🏷️ QR Code cho từng thiết bị
- ⚡ Tracking tình trạng và bảo trì
- 📦 Quản lý kho và xuất nhập

### 👥 Quản Lý Khách Hàng
- 📇 Database khách hàng chi tiết
- 📈 Lịch sử booking và thanh toán
- 🎯 Phân loại khách hàng VIP
- 📧 Hệ thống email marketing

### 📅 Hệ Thống Booking
- 🗓️ Calendar tương tác trực quan
- ⚠️ Conflict detection thông minh
- 🔄 Booking workflow tự động
- 📱 Notifications và reminders

### 💰 Quản Lý Hóa Đơn
- 🧾 Tự động tạo hóa đơn
- 💳 Multi-payment methods
- 📊 Báo cáo doanh thu chi tiết
- 📈 Analytics và insights

### 📊 Dashboard & Analytics
- 📈 Real-time revenue tracking
- 📉 Utilization analytics
- 🎯 Performance metrics
- 📋 Customizable reports

---

## 🏗️ Kiến Trúc Hệ Thống

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web App       │    │  Desktop App    │    │   Backend API   │
│   (React)       │◄──►│   (Electron)    │◄──►│   (Express.js)  │
│   Port: 3000    │    │                 │    │   Port: 5000    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │    MongoDB      │
                                               │   Database      │
                                               └─────────────────┘
```

---

## 💻 Cài Đặt

### 📋 Yêu Cầu Hệ Thống
- **Node.js** >= 18.0.0
- **MongoDB** >= 5.0
- **Git** latest version
- **VS Code** (khuyến nghị)

### 🔧 Cài Đặt Chi Tiết

<details>
<summary>📖 Click để xem hướng dẫn chi tiết</summary>

#### 1. Clone Repository
```bash
git clone https://github.com/khoale-dev-code/studio-management-system.git
cd studio-management-system
```

#### 2. Cài Đặt Dependencies
```bash
# Cài đặt tất cả (khuyến nghị)
npm run install:all

# Hoặc cài từng phần
npm install                    # Root dependencies
cd backend && npm install      # Backend dependencies  
cd ../frontend && npm install  # Frontend dependencies
cd ../desktop && npm install   # Desktop dependencies
```

#### 3. Cấu Hình Environment
```bash
# Sao chép file environment mẫu
cp .env.example .env
cp backend/.env.example backend/.env
```

**Chỉnh sửa file `.env`:**
```env
# Database
MONGODB_URI=mongodb://localhost:27017/studio_management
MONGODB_TEST_URI=mongodb://localhost:27017/studio_management_test

# Server
PORT=5000
NODE_ENV=development

# Authentication
JWT_SECRET=your-super-secret-jwt-key
CLERK_SECRET_KEY=your-clerk-secret-key

# File Upload
UPLOAD_PATH=uploads/
MAX_FILE_SIZE=10485760

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### 4. Khởi Động MongoDB
```bash
# Windows - MongoDB Community
mongod --dbpath "C:\data\db"

# macOS - Homebrew
brew services start mongodb-community

# Linux - SystemD
sudo systemctl start mongod
```

#### 5. Chạy Ứng Dụng
```bash
# Chạy tất cả (Backend + Frontend)
npm run dev

# Hoặc chạy từng phần
npm run dev:backend    # Backend only
npm run dev:frontend   # Frontend only  
npm run dev:desktop    # Desktop app
```

</details>

---

## 📂 Cấu Trúc Dự Án

```
studio-management-system/
├── 📁 backend/                    # Express.js Backend
│   ├── 📁 src/
│   │   ├── 📁 config/            # Database & environment config
│   │   ├── 📁 models/            # Mongoose schemas
│   │   │   ├── Room.js
│   │   │   ├── Equipment.js
│   │   │   ├── Customer.js
│   │   │   ├── Booking.js
│   │   │   └── Invoice.js
│   │   ├── 📁 routes/            # API endpoints
│   │   │   ├── auth.js
│   │   │   ├── rooms.js
│   │   │   ├── equipment.js
│   │   │   ├── customers.js
│   │   │   └── bookings.js
│   │   ├── 📁 controllers/       # Business logic
│   │   ├── 📁 middleware/        # Custom middleware
│   │   ├── 📁 services/          # External services
│   │   └── 📁 utils/             # Utility functions
│   ├── 📁 uploads/               # File uploads
│   ├── server.js                 # Server entry point
│   └── package.json
│
├── 📁 frontend/                   # React Frontend
│   ├── 📁 public/                # Static files
│   ├── 📁 src/
│   │   ├── 📁 components/        # React components
│   │   │   ├── 📁 ui/           # Base UI components
│   │   │   ├── 📁 forms/        # Form components
│   │   │   └── 📁 layout/       # Layout components
│   │   ├── 📁 pages/             # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Rooms.jsx
│   │   │   ├── Equipment.jsx
│   │   │   ├── Customers.jsx
│   │   │   └── Bookings.jsx
│   │   ├── 📁 hooks/             # Custom hooks
│   │   ├── 📁 services/          # API calls
│   │   ├── 📁 store/             # State management
│   │   └── 📁 utils/             # Frontend utilities
│   └── package.json
│
├── 📁 desktop/                    # Electron Desktop App
│   ├── 📁 src/                   # Electron main process
│   ├── 📁 renderer/              # Electron renderer
│   ├── 📁 assets/                # Desktop assets
│   └── package.json
│
├── 📁 shared/                     # Shared utilities & types
├── 📁 docs/                       # Documentation
│   ├── 📁 api/                   # API documentation
│   ├── 📁 images/                # Screenshots
│   └── TEAM_WORKFLOW.md
├── 📁 scripts/                    # Build & deployment scripts
├── .env.example                   # Environment template
├── .gitignore
├── package.json                   # Root package.json
└── README.md
```

---

## 🛠️ Tech Stack

### 🔧 Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Express.js** | Web framework | ^4.18.0 |
| **MongoDB** | Database | ^6.0.0 |
| **Mongoose** | ODM | ^7.5.0 |
| **Clerk** | Authentication | ^4.23.0 |
| **Multer** | File upload | ^1.4.5 |
| **jsPDF** | PDF generation | ^2.5.0 |
| **Nodemailer** | Email service | ^6.9.0 |

### ⚛️ Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI framework | ^18.2.0 |
| **Vite** | Build tool | ^4.4.0 |
| **Tailwind CSS** | Styling | ^3.3.0 |
| **React Router** | Routing | ^6.15.0 |
| **React Hook Form** | Forms | ^7.45.0 |
| **Zustand** | State management | ^4.4.0 |
| **Lucide React** | Icons | ^0.263.0 |
| **Chart.js** | Charts | ^4.4.0 |

### 🖥️ Desktop
| Technology | Purpose | Version |
|------------|---------|---------|
| **Electron** | Desktop framework | ^25.0.0 |
| **Electron Builder** | Packaging | ^24.6.0 |
| **Electron Updater** | Auto updates | ^6.1.0 |

---

## 📚 API Documentation

<details>
<summary>🔗 Authentication Endpoints</summary>

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "password123"
}
```

### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

</details>

<details>
<summary>🏠 Rooms Management</summary>

### Get All Rooms
```http
GET /api/rooms?page=1&limit=10&search=studio
```

### Create Room
```http
POST /api/rooms
Content-Type: multipart/form-data

{
  "name": "Studio A",
  "type": "recording",
  "capacity": 10,
  "hourlyRate": 50,
  "description": "Professional recording studio",
  "amenities": ["microphone", "mixing_board"],
  "images": [file1, file2]
}
```

### Update Room
```http
PUT /api/rooms/:id
Content-Type: application/json

{
  "name": "Studio A - Updated",
  "hourlyRate": 60
}
```

</details>

<details>
<summary>📅 Bookings Management</summary>

### Get Bookings
```http
GET /api/bookings?startDate=2024-01-01&endDate=2024-01-31
```

### Create Booking
```http
POST /api/bookings
Content-Type: application/json

{
  "roomId": "room_id_here",
  "customerId": "customer_id_here", 
  "startTime": "2024-01-15T10:00:00Z",
  "endTime": "2024-01-15T14:00:00Z",
  "equipmentIds": ["eq1", "eq2"],
  "notes": "Special requirements"
}
```

### Get Calendar Data
```http
GET /api/bookings/calendar?month=2024-01
```

</details>

<details>
<summary>🎛️ Equipment Management</summary>

### Get Equipment
```http
GET /api/equipment?category=audio&available=true
```

### Create Equipment
```http
POST /api/equipment
Content-Type: application/json

{
  "name": "Shure SM58",
  "category": "microphone",
  "brand": "Shure",
  "model": "SM58",
  "serialNumber": "SN123456",
  "condition": "excellent",
  "dailyRate": 15
}
```

</details>

---

## 🧪 Testing

```bash
# Chạy tất cả tests
npm test

# Test từng phần
npm run test:backend       # Backend tests
npm run test:frontend      # Frontend tests
npm run test:integration   # Integration tests

# Test với coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

### Test Structure
```
tests/
├── 📁 unit/              # Unit tests
│   ├── models/
│   ├── controllers/
│   └── components/
├── 📁 integration/       # Integration tests
│   ├── api/
│   └── database/
└── 📁 e2e/              # End-to-end tests
    ├── booking-flow.test.js
    └── user-journey.test.js
```

---

## 🚀 Deployment

### 🔧 Development Build
```bash
npm run build              # Build tất cả
npm run build:backend      # Build backend only
npm run build:frontend     # Build frontend only
```

### 🌐 Production Deployment
```bash
# Docker deployment
docker-compose up -d

# Manual deployment
npm run deploy:prod
```

### 📦 Desktop Distribution
```bash
cd desktop
npm run dist              # Tạo installer cho Windows
npm run dist:mac          # Tạo installer cho macOS
npm run dist:linux        # Tạo installer cho Linux
```

---

## 👥 Team Workflow

### 🌿 Git Workflow
```bash
# 1. Tạo branch mới
git checkout develop
git pull origin develop
git checkout -b feature/booking-calendar

# 2. Làm việc và commit
git add .
git commit -m "feat: thêm booking calendar component"

# 3. Push và tạo PR
git push -u origin feature/booking-calendar
```

### 📝 Commit Convention
| Type | Description | Example |
|------|-------------|---------|
| `feat` | Tính năng mới | `feat: thêm booking calendar` |
| `fix` | Sửa lỗi | `fix: sửa lỗi validation form` |
| `docs` | Cập nhật docs | `docs: cập nhật API documentation` |
| `style` | Format code | `style: format theo ESLint rules` |
| `refactor` | Tối ưu code | `refactor: tối ưu booking service` |
| `test` | Thêm tests | `test: thêm unit tests cho user controller` |

---

## 🗺️ Roadmap

### ✅ Phase 1 - Core Features *(Completed)*
- [x] Project setup & architecture
- [x] Database design & models
- [x] Authentication system
- [x] Basic CRUD operations

### 🔄 Phase 2 - Booking System *(In Progress)*
- [x] Calendar integration
- [x] Booking workflow
- [ ] Conflict detection
- [ ] Equipment assignment

### 📋 Phase 3 - Business Features *(Upcoming)*
- [ ] Invoice generation
- [ ] Payment integration
- [ ] Advanced reporting
- [ ] Desktop application

### 🚀 Phase 4 - Enhancements *(Future)*
- [ ] Mobile application
- [ ] Real-time notifications
- [ ] Multi-language support
- [ ] Integration APIs

---

## 🤝 Contributing

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết chi tiết.

### 🐛 Bug Reports
1. Kiểm tra [Issues](https://github.com/khoale-dev-code/studio-management-system/issues) để tránh duplicate
2. Tạo issue mới với template **Bug Report**
3. Mô tả chi tiết lỗi và cách reproduce

### 💡 Feature Requests  
1. Tạo issue với template **Feature Request**
2. Mô tả rõ tính năng và use case
3. Thảo luận với team trước khi implement

### 🔧 Code Contribution
1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

---

## 👨‍💻 Team

| Role | Name | GitHub | Email |
|------|------|--------|-------|
| 👑 **Project Lead** | Khoa Le | [@khoale-dev-code](https://github.com/khoale-dev-code) | khoale.dev@example.com |
| 🖥️ **Backend Dev** | Khoa Le and | [@member1](https://github.com/member1) | member1@example.com |
| ⚛️ **Frontend Dev** | Khoa Le and | [@member2](https://github.com/member2) | member2@example.com |
| 🔄 **Fullstack Dev** | Khoa Le and | [@member3](https://github.com/member3) | member3@example.com |

---

## 📄 License

Dự án này được phân phối dưới [MIT License](LICENSE). Xem file `LICENSE` để biết thêm chi tiết.

---

<div align="center">
  <p>
    <strong>Made with ❤️ by Studio Management Team</strong>
  </p>
  <p>
    ⭐ <em>Nếu dự án này hữu ích, hãy cho chúng tôi một star trên GitHub!</em>
  </p>
  
  <a href="https://github.com/khoale-dev-code/studio-management-system">
    <img src="https://img.shields.io/github/stars/khoale-dev-code/studio-management-system?style=social" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/khoale-dev-code/studio-management-system/fork">
    <img src="https://img.shields.io/github/forks/khoale-dev-code/studio-management-system?style=social" alt="GitHub Forks" />
  </a>
</div>
