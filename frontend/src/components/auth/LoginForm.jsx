import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Bienvenido de nuevo 😎");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (loginErrors.length > 0) {
      loginErrors.forEach((error) => {
        toast.error(error);
      });
      setLoading(false);
    }
  }, [loginErrors]);

  const onSubmit = handleSubmit(async (values) => {
    setLoading(true);
    await signin(values);
    setLoading(false);
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm 
            placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none
            focus:border-gray-900 dark:focus:border-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="example@gmail.com"
        />

        {errors.email && <p className="text-red-500">Email es requerido</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Contraseña
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm 
              placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none
              focus:border-gray-900 dark:focus:border-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="******"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerida</p>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOffIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 cursor-pointer" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      <div className="text-sm flex justify-center">
        <span className="text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">
          ¿No tienes cuenta? Regístrate{" "}
        </span>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
            font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 
            dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-gray-900 dark:focus:ring-white cursor-pointer transition"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Iniciar Sesión"
          )}
        </button>
      </div>
    </form>
  );
};
