import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MoviesProvider } from "./context/MoviesContext.jsx";
import { AuthPage } from "./pages/AuthPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MovieFormPage } from "./pages/MovieFormPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/add-movie" element={<MovieFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Cambia a light, dark o colored
      />
    </AuthProvider>
  );
}

export default App;
