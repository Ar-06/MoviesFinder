import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MoviesGridUser } from "../components/Home/MoviesGridUser";

export const ProfilePage = () => {
  const { isAuthenticated, initialUser, user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Cerraste Sesión");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-6">
              <header className="text-center">
                <figure className="relative inline-block">
                  {isAuthenticated ? (
                    <div className="w-32 h-32 rounded-full mx-auto border-2 border-gray-200 font-bold bg-gray-900 text-white text-4xl flex items-center justify-center">
                      {initialUser()}
                    </div>
                  ) : (
                    <div>No autenticado</div>
                  )}
                </figure>
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  {user.username}
                </h2>
                <p className="text-gray-500">{user.email}</p>
              </header>
              <button
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </button>
            </section>
          </aside>

          <section className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <header className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Mis Películas Subidas
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Aquí puedes ver y gestionar todas las películas que has
                  agregado
                </p>
              </header>
              <MoviesGridUser />
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};
