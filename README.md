# Production-Ready MERN 🚀

A fullstack MERN application built with a focus on real-world deployment practices — containerized with Docker, orchestrated with Docker Compose, and deployed across modern cloud platforms.

> **Purpose:** This project goes beyond "just building a MERN app." It's a hands-on exploration of how production-grade applications are structured, containerized, and shipped — covering the complete journey from local dev to live deployment.

[![Frontend](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://your-vercel-app.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)](https://production-ready-mern.onrender.com/api/message)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📌 Table of Contents

- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Local Development](#-local-development)
- [Docker Setup](#-docker-setup)
- [Docker Compose](#-docker-compose)
- [API Reference](#-api-reference)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Key Learnings](#-key-learnings)
- [Roadmap](#-roadmap)

---

## 🌐 Live Demo

| Layer    | URL |
|----------|-----|
| Frontend | [https://production-ready-mern.vercel.app/](https://your-vercel-app.vercel.app) |
| Backend  | [production-ready-mern.onrender.com/api/message](https://production-ready-mern.onrender.com/api/message) |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Fetch API |
| Backend | Node.js, Express.js, CORS, dotenv |
| Containerization | Docker, Docker Compose |
| Deployment | Vercel (frontend), Render (backend) |
| Source Control | GitHub (with auto-deploy hooks) |

---

## 🏗 Architecture

### Production

```
          Browser
             │
             ▼
   ┌─────────────────────┐
   │  Frontend (Vercel)  │
   │    React + Vite     │
   └────────┬────────────┘
            │  HTTPS API Request
            ▼
   ┌──────────────────────┐
   │  Backend (Render)    │
   │  Node.js + Express   │
   └────────┬─────────────┘
            │
            ▼
      JSON Response
```

### Local (Docker)

```
   ┌──────────────────────┐
   │   React Container    │
   │     (port 5173)      │
   └──────────┬───────────┘
              │ Docker Bridge Network
              ▼
   ┌──────────────────────┐
   │  Express Container   │
   │     (port 4000)      │
   └──────────────────────┘
```

---

## ⚙️ How It Works

1. User visits the React frontend hosted on **Vercel**
2. React makes an API call to the Express backend on **Render**
3. Express processes the request and returns a JSON response
4. React updates the UI with the received data

No database layer — intentionally lean, focused on infra and deployment patterns.

---

## 📁 Project Structure

```
Production-ready-MERN/
├── client/                  # React + Vite frontend
│   ├── src/
│   ├── public/
│   └── Dockerfile
│
├── server/                  # Express backend
│   ├── index.js
│   └── Dockerfile
│
├── docker-compose.yml       # Multi-container orchestration
├── .gitignore
└── README.md
```

---

## 💻 Local Development

### Clone the Repository

```bash
git clone https://github.com/Akash3328/Production-ready-MERN.git
cd Production-ready-MERN
```

### Backend

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=4000
```

```bash
npm run dev
# → http://localhost:4000
```

### Frontend

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:4000
```

```bash
npm run dev
# → http://localhost:5173
```

---

## 🐳 Docker Setup

Build and run each service individually.

### Backend

```bash
cd server
docker build -t mern-server .
docker run -p 4000:4000 mern-server
```

### Frontend

```bash
cd client
docker build -t mern-client .
docker run -p 5173:5173 mern-client
```

---

## 🐳 Docker Compose

Run the full stack with a single command from the project root:

```bash
# Start all services
docker compose up

# Detached mode
docker compose up -d

# Stop all services
docker compose down
```

Docker Compose handles container networking automatically — the frontend and backend communicate via a shared Docker bridge network.

---

## 📡 API Reference

### `GET /api/message`

Returns a test JSON response.

**Response:**
```json
{
  "success": true,
  "message": "Hello from sky farm 🚀"
}
```

---

### `GET /healthz`

Health check endpoint used by Render for uptime monitoring.

**Response:**
```
OK
```

---

## 🔐 Environment Variables

### Backend — `server/.env`

```env
PORT=4000
```

### Frontend — `client/.env`

```env
VITE_API_URL=http://localhost:4000
```

> In production, `VITE_API_URL` points to the live Render backend URL.

---

## 🚀 Deployment

### Backend → Render

- Connected GitHub repository
- Set root directory to `/server`
- Added environment variables via dashboard
- Configured `/healthz` as the health check route
- Enabled auto-deploy on push to `main`

### Frontend → Vercel

- Imported GitHub repository
- Configured Vite build settings (`npm run build` / `dist`)
- Set `VITE_API_URL` to the live Render backend URL
- Auto-deploy enabled on push to `main`

---

## 📘 Key Learnings

This project was built to internalize concepts that tutorials often gloss over:

- **Fullstack architecture** — how frontend and backend are separated and connected in production
- **Docker fundamentals** — writing Dockerfiles, building images, running containers
- **Docker Compose** — multi-container orchestration, networking, and service dependencies
- **Environment variables** — managing secrets and config across dev and production
- **CORS configuration** — enabling secure cross-origin communication
- **Health checks** — how cloud platforms verify service availability
- **Port mapping** — understanding host vs container ports
- **CI/CD basics** — GitHub-connected auto-deploy pipelines
- **Debugging in prod** — differences between local and deployed environments

---


## 👨‍💻 Author

**Akash Odedara** — [@Akash3328](https://github.com/Akash3328) 
---

Built as a deliberate, hands-on study of how real applications are deployed — not just how they're coded.

---

*If this project helped you understand MERN deployment better, consider giving it a ⭐*
