# BlogSpace — Full Stack Blog Platform

A complete blog platform with user auth, posts, and comments.  
Built with React + Bootstrap (frontend) and Node.js + Express + MongoDB (backend).

---

## Project Structure

```
blog-platform/
├── backend/
│   ├── src/
│   │   ├── config/db.js          # MongoDB connection
│   │   ├── middleware/auth.js    # JWT middleware
│   │   ├── models/               # User, Post, Comment schemas
│   │   ├── routes/               # auth, posts, comments routes
│   │   └── index.js              # Express entry point
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── context/AuthContext.jsx   # Global auth state
    │   ├── utils/api.js              # Axios with auth header
    │   ├── components/Navbar.jsx
    │   └── pages/                    # All 6 pages
    ├── index.html
    └── package.json
```

---

## Setup Instructions

### 1. MongoDB Atlas

1. Go to https://www.mongodb.com/atlas and create a free account
2. Create a new cluster (free tier M0)
3. Under **Database Access**, create a user with read/write permissions
4. Under **Network Access**, add `0.0.0.0/0` (allow all IPs)
5. Click **Connect → Drivers** and copy the connection string

### 2. Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env and fill in your MONGO_URI and a JWT_SECRET
npm install
npm run dev
```

The server starts at http://localhost:5000

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app opens at http://localhost:5173

---

## REST API Reference

### Auth
| Method | Endpoint         | Auth | Description      |
|--------|------------------|------|------------------|
| POST   | /api/register    | No   | Register user    |
| POST   | /api/login       | No   | Login user       |

### Posts
| Method | Endpoint         | Auth | Description       |
|--------|------------------|------|-------------------|
| GET    | /api/posts       | No   | Get all posts     |
| GET    | /api/posts/:id   | No   | Get single post   |
| POST   | /api/posts       | Yes  | Create post       |
| PUT    | /api/posts/:id   | Yes  | Edit own post     |
| DELETE | /api/posts/:id   | Yes  | Delete own post   |

### Comments
| Method | Endpoint              | Auth | Description            |
|--------|-----------------------|------|------------------------|
| GET    | /api/comments/:postId | No   | Get comments for post  |
| POST   | /api/comments         | Yes  | Add comment            |
| DELETE | /api/comments/:id     | Yes  | Delete own comment     |

---

## Features Implemented

- ✅ User Registration & Login with JWT
- ✅ Password hashing with bcrypt
- ✅ Protected routes (auth required for write actions)
- ✅ Create, Edit, Delete blog posts (own posts only)
- ✅ View all posts / single post
- ✅ Add & delete comments
- ✅ Dashboard to manage own posts
- ✅ Responsive UI with Bootstrap 5
- ✅ MongoDB Atlas database
