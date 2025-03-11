import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { RegisterForm } from "../components/auth/RegisterForm";
import { LoginForm } from "../components/auth/LoginForm";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative transition">
      {/* Fondos */}
      <div className="absolute inset-0 h-full w-full bg-white dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:20px_20px] dark:hidden"></div>
        <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.20)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      </div>

      {/* Botón de cambio de tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110 transition cursor-pointer"
      >
        {darkMode ? (
          <Sun className="text-yellow-400 w-6 h-6" />
        ) : (
          <Moon className="text-gray-700 dark:text-gray-300 w-6 h-6" />
        )}
      </button>

      {/* Contenido */}
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            MoviesFinder
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Descubre películas que amarás
          </p>
        </div>

        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-lg p-8 border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-md bg-opacity-90 dark:bg-opacity-80">
          <div className="flex border border-gray-300 dark:border-gray-600">
            <button
              className={`flex-1 py-3 text-sm font-medium cursor-pointer transition-colors
              ${
                isLogin
                  ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Iniciar Sesión
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium cursor-pointer transition-colors
      ${
        !isLogin
          ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
      }`}
              onClick={() => setIsLogin(false)}
            >
              Registrarse
            </button>
          </div>

          <div className="p-6">
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
