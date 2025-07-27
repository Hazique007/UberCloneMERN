
# 🚗 Uber Clone – MERN Stack Ride Booking Platform

A feature-rich Uber Clone built using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform allows users to book rides and drivers to accept them in real-time with role-based dashboards and map integrations.

---

## ✨ Features

### 👥 User & Driver Roles
- Users can:
  - Register/Login
  - Book a ride by entering pickup/drop locations
  - Track ride status in real-time
- Drivers can:
  - Register/Login
  - See nearby ride requests
  - Accept or reject requests
  - Navigate to pickup/drop points

### 🗺️ Maps Integration
- Integrated with **Mapbox** or **Google Maps API** for:
  - Location autocomplete
  - Route drawing
  - Real-time pickup/drop tracking

### 🔔 Live Notifications
- Real-time socket communication between users and drivers using **Socket.io**

### 🔐 Authentication
- Secure JWT-based authentication
- Role-based routing and access control

### 🧩 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **WebSocket:** Socket.io
- **Maps API:** Google Maps / Mapbox
- **Authentication:** JWT + bcrypt

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/uber-clone-mern.git
cd uber-clone-mern
```

### 2. Setup Backend
```bash
cd backend
npm install
touch .env
# Add your MongoDB URI, JWT_SECRET, Maps API keys to .env
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm start
```

## 📃 License
Licensed under the MIT License.
