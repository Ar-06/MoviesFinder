import { useState } from "react";
import { Search, Plus, ChevronDown, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useMovies } from "../../context/MoviesContext";
import { ModalMovie } from "../Movie/ModalMovie";

export const Navbar = () => {
  const { isAuthenticated, initialUser } = useAuth();
  const { isModalOpen, setIsModalOpen, searchMovies } = useMovies();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchMovies(e.target.value);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-900">FilmFinder</h1>
          </div>

          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-start">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Buscar películas
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  value={search}
                  onChange={handleSearch}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  placeholder="Buscar películas..."
                  type="search"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center lg:ml-4">
            {isAuthenticated ? (
              <>
                <button
                  className="flex items-center mx-3 px-3 py-1 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  <span>Agregar</span>
                </button>

                {isModalOpen && (
                  <ModalMovie
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                )}

                <div className="ml-3 relative">
                  <Link
                    to="/profile"
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-1xl font-bold">
                      {initialUser()}
                    </div>
                    <ChevronDown className="ml-1 h-4 w-4 mt-2 text-gray-500" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="flex items-center mx-2 px-3 py-1 rounded-md text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
                >
                  <LogIn className="h-4 w-4 mr-1" />
                  <span>Iniciar Sesión</span>
                </Link>

                <Link
                  to="/auth"
                  className="flex items-center mx-2 px-3 py-1 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
                >
                  <UserPlus className="h-4 w-4 mr-1" />
                  <span>Registrarse</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
