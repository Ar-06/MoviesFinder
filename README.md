# MoviesFinder 🎬

A web platform where users can share their favorite movies with ratings, posters, and more.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Ar-06/MoviesFinder)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/Ar-06/MoviesFinder/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)

---

## Description 📝

MoviesFinder is a dynamic web application built with a MERN stack (MongoDB, Express, React, Node.js). It allows users to discover, share, and manage their favorite movies. Users can create an account, log in, and then share movie recommendations including their rating, release year, and an optional poster image. The platform also provides features to view and manage your own movie recommendations.

---

## Features ✨

- **User Authentication:** Secure registration and login system using JWT for authentication.
- **Movie Recommendations:** Users can add their favorite movies with title, rating, and year.
- **Image Uploads:** Support for uploading movie poster images via Cloudinary.
- **Personalized Profile:** View and manage your own movie recommendations on your profile page.
- **Movie Search:** Search functionality to find movies within the platform.
- **Responsive Design:** A modern and responsive user interface powered by Tailwind CSS.
- **Dark Mode:** Support for a dark theme for a comfortable viewing experience.
- **Dockerization:** The backend application is containerized with Docker for easy deployment.

---

## Tech Stack 🚀

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Zod (for validation), JWT (jsonwebtoken), bcryptjs, Cloudinary (for image storage).
- **Frontend:** React, Vite, React Router DOM, Tailwind CSS, Axios, React Hook Form, Toastify, Framer Motion, Lucide React.
- **Development Tools:** ESLint, Docker.

---

## Installation 🛠️

This project consists of a backend and a frontend. Both need to be set up.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary Account](https://cloudinary.com/)

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ar-06/MoviesFinder.git
   cd MoviesFinder
   ```

2. **Navigate to the backend directory and install dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file** in the `backend` directory and configure your environment variables:
   ```env
   PORT=3000
   JWT_SECRET=your_super_secret_key
   MONGO_URI=mongodb://localhost:27017/moviesfinder
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the backend server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory and install dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Create a `.env` file** in the `frontend` directory and configure your environment variables:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

3. **Run the frontend development server:**
   ```bash
   npm run dev
   ```

### Docker Setup (Optional)

1. **Build and run the backend service using Docker Compose:**
   ```bash
   cd ..
   docker-compose up --build
   ```
   Note: Ensure your backend `.env` file is configured correctly for Docker.

---

## Usage 🚀

Once both the frontend and backend are running, you can access the MoviesFinder application in your browser (typically at `http://localhost:5173`).

**Key Actions:**

- **Register/Login:** Navigate to the authentication page to create an account or log in with existing credentials.
- **Add Movie:** After logging in, click the "Agregar" button on the navbar to open a modal and add a new movie recommendation. You can upload an image, enter the title, year, and rating.
- **View Movies:** The homepage displays all recommended movies. You can search for movies using the search bar.
- **View Your Movies:** Navigate to your profile page to see all the movies you have recommended.
- **Delete Movie:** On your profile page, you can delete your movie recommendations.
- **Logout:** Log out from your account via the profile page or the dropdown menu.

---

## Project Structure 📁

```
MoviesFinder/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── libs/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── app.js
│   │   └── index.js
│   ├── Dockerfile
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   └── vercel.json
└── docker-compose.yml
```

---

## API Reference 🌐

### Authentication Routes

- **POST /auth/register** : Register a new user.
  - Request Body: `{ username, email, password }`
- **POST /auth/login** : Log in a user.
  - Request Body: `{ email, password }`
- **POST /auth/logout** : Log out the current user.
- **GET /auth/profile** : Get the profile of the authenticated user (requires token).
- **GET /auth/verify** : Verify the user's token.

### Movies Routes

- **POST /movies/register** : Register a new movie recommendation (requires token).
  - Request Body: `FormData` with `title`, `year`, `rating`, and optional `image`.
- **GET /** : Get all movies.
- **GET /me** : Get movies recommended by the authenticated user (requires token).
- **DELETE /:id** : Delete a specific movie by ID (requires token).

---

## Contributing 🤝

Contributions are welcome! Please feel free to:

- **Fork** the repository.
- **Create a new branch** for your feature (`git checkout -b feature/YourFeature`).
- **Commit your changes** (`git commit -m 'Add some YourFeature'`).
- **Push to the branch** (`git push origin feature/YourFeature`).
- **Open a Pull Request**.

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on our code of conduct and the process for submitting pull requests.

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Important Links 🔗

- **Live Demo:** [MoviesFinder Live Demo](https://moviesfinder-rjgp.onrender.com/) (Backend) and [MoviesFinder Frontend Demo](https://movies-finder-gules.vercel.app/) (Frontend)
- **Author Profile:** [Ar-06](https://github.com/Ar-06)

---

<footer>
  <p align="center">
    Built with ❤️ by <strong>Ar-06</strong>
  </p>
  <p align="center">
    <a href="https://github.com/Ar-06/MoviesFinder" target="_blank">
      <img src="https://img.shields.io/github/stars/Ar-06/MoviesFinder?style=social" alt="GitHub stars">
    </a>
    <a href="https://github.com/Ar-06/MoviesFinder/fork" target="_blank">
      <img src="https://img.shields.io/github/forks/Ar-06/MoviesFinder?style=social" alt="GitHub forks">
    </a>
  </p>
  <p align="center">
    Enjoy using MoviesFinder! Feel free to star, fork, or open an issue if you have any suggestions or encounter problems.
  </p>
</footer>


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**