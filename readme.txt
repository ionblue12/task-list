🧠 Project Plan: Task Manager App (React + Express)
🔧 Tech Stack
Frontend: React + React Router

Backend: Express.js

Database: MongoDB (or PostgreSQL)

Auth: JWT (JSON Web Tokens)

🗂️ Project Structure Overview
🖥️ Frontend (React)
Pages/Routes:

/login – User login form

/register – New user signup

/dashboard – Shows user’s tasks (protected)

/tasks/:id/edit – Edit a specific task

Components:

TaskList

TaskItem

TaskForm

Navbar

AuthWrapper (for route protection)

🌐 Backend (Express)
Endpoints (APIs):

POST /api/auth/register – Register user

POST /api/auth/login – Login user

GET /api/tasks – Get all tasks (auth required)

POST /api/tasks – Create a new task

PUT /api/tasks/:id – Update a task

DELETE /api/tasks/:id – Delete a task

🔐 Authentication Flow
User signs up or logs in.

Server sends back a JWT token.

Token is saved in localStorage or cookie.

For protected routes, React checks if token exists.

When fetching tasks, token is sent in the header to the Express backend.

✅ Features List
 User can register & log in

 User sees their own tasks after logging in

 User can add new tasks

 User can edit existing tasks

 User can delete tasks

 Optional: Mark task as complete

 Optional: Sort/filter tasks

🔐 Security Considerations
Validate inputs (on both frontend and backend)

Hash passwords (using bcrypt)

Use HTTPS (in production)

Use secure, HttpOnly cookies if storing tokens

