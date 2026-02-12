# 🍔 Muncho - Food Delivery Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

A modern, full-stack food delivery platform built with microservices architecture. Muncho connects hungry customers with their favorite restaurants and reliable delivery riders, providing a seamless food ordering experience.

## ✨ Features

### 🎯 Core Features
- **User Authentication** - Secure authentication with JWT and Google OAuth
- **Restaurant Management** - Comprehensive restaurant and menu management
- **Order Processing** - Real-time order tracking and management
- **Rider Coordination** - Efficient delivery rider assignment and tracking
- **Payment Integration** - Secure payment processing
- **Real-time Updates** - Live order status and location tracking

### 🚀 Planned Features
- [ ] Multi-restaurant ordering
- [ ] Advanced search and filters
- [ ] Rating and review system
- [ ] Promotional codes and discounts
- [ ] Push notifications
- [ ] Analytics dashboard
- [ ] Multi-language support

## 🏗️ Architecture

Muncho is built using a **microservices architecture** for scalability and maintainability:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│  API Gateway │────▶│   Services   │
│   (React)   │     │             │     │              │
└─────────────┘     └─────────────┘     └─────────────┘
                                              │
                    ┌─────────────────────────┼─────────────┐
                    │                         │             │
              ┌─────▼─────┐           ┌──────▼──────┐ ┌───▼─────┐
              │   Auth    │           │  Restaurant │ │  Rider  │
              │  Service  │           │   Service   │ │ Service │
              └───────────┘           └─────────────┘ └─────────┘
```

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, Google OAuth 2.0
- **API Documentation:** Swagger/OpenAPI (planned)

### Frontend
- **Framework:** React (in development)
- **State Management:** Redux/Context API
- **Styling:** TailwindCSS/Material-UI
- **Build Tool:** Vite

### DevOps & Tools
- **Version Control:** Git & GitHub
- **Package Manager:** npm
- **Development:** Concurrently, Nodemon
- **API Testing:** Postman

## 📁 Project Structure

```
Muncho-app/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   └── package.json
├── services/                 # Microservices
│   ├── auth/                # Authentication service
│   │   ├── src/
│   │   │   ├── config/     # Database and app configuration
│   │   │   ├── controllers/# Business logic handlers
│   │   │   ├── models/     # MongoDB schemas
│   │   │   ├── routes/     # API routes
│   │   │   └── index.ts    # Service entry point
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── rider/               # Rider management service (planned)
│   └── restaurant/          # Restaurant service (planned)
├── RefernceUI/              # UI reference designs
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sukrit-89/Muncho.git
cd Muncho
```

2. **Set up Authentication Service**
```bash
cd services/auth
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in `services/auth/`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NODE_ENV=development
```

4. **Build and Run**
```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build
npm start
```

The auth service will be running on `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/google` | Google OAuth login | No |
| GET | `/api/auth/profile` | Get user profile | Yes |
| PUT | `/api/auth/profile` | Update profile | Yes |

> 📝 Detailed API documentation coming soon with Swagger UI

## 🗺️ Roadmap

### Phase 1: Foundation (Current)
- [x] Project setup and architecture
- [x] Authentication service
- [ ] Frontend setup
- [ ] Database design

### Phase 2: Core Services
- [ ] Restaurant service
- [ ] Rider service
- [ ] Order management service
- [ ] Payment integration

### Phase 3: Frontend Development
- [ ] User interface
- [ ] Restaurant dashboard
- [ ] Rider mobile app
- [ ] Admin panel

### Phase 4: Advanced Features
- [ ] Real-time tracking
- [ ] Notifications
- [ ] Analytics
- [ ] Performance optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow TypeScript best practices
- Write clean, self-documenting code
- Add comments for complex logic
- Use meaningful commit messages
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sukrit**
- GitHub: [@sukrit-89](https://github.com/sukrit-89)

## 🙏 Acknowledgments

- Inspired by modern food delivery platforms
- Built with ❤️ using open-source technologies
- Special thanks to the Node.js and TypeScript communities

## 📧 Contact

For questions or suggestions, please open an issue or reach out through GitHub.

---

<div align="center">
  <b>⭐ Star this repository if you find it helpful! ⭐</b>
  <br><br>
  Made with ❤️ by Sukrit
</div>
