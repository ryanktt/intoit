# IntoIT

## Description
Course App is a full-stack web application that allows users to create, manage, and enroll in online courses. The app supports user authentication, course and class management, and displays course content through a modern and responsive interface. Users can sign up, log in, create courses, add classes to courses, and view course/class content. The backend is built using Node.js, Express, and MongoDB, while the frontend is built with React and Redux.

## Tech Stack

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT for authentication
- bcrypt for password hashing
- Multer (for file uploads, if needed)
- dotenv (for environment variable management)

**Frontend**:
- React (with Hooks)
- Redux (with redux-thunk for async actions)
- React Router
- Axios (for HTTP requests)
- SCSS (modular styles)

**Testing**:
- @testing-library/react
- @testing-library/jest-dom

**Other**:
- CORS
- Procfile for deployment

## Setup Guide

### 1. Clone the repository
```sh
git clone <repo_url>
cd desafio-engaged
```

### 2. Backend Setup
- Go to the root directory:
  ```sh
  cd desafio-engaged
  ```
- Create a `.env` file and add the following variables:
  ```env
  MONGO_URI=<your_mongo_uri>
  JWT_SECRET=<your_jwt_secret>
  PORT=<your_preferred_port>
  ```
- Install backend dependencies:
  ```sh
  npm install
  ```
- Start the backend server:
  ```sh
  npm run server
  # Or for production:
  npm start
  ```

### 3. Frontend Setup
- Go to the client directory:
  ```sh
  cd views
  ```
- Create a `.env` file and add:
  ```env
  REACT_APP_API_URL=<your_backend_url>
  ```
- Install frontend dependencies:
  ```sh
  npm install
  ```
- Start the React app:
  ```sh
  npm start
  ```

### 4. Usage
- Access the app at `http://localhost:<PORT>` (by default, React runs on 3000, backend on 5000 or as per your .env)
- Sign up, log in, and start creating or enrolling in courses!

---

For more information, see the code comments and structure.
