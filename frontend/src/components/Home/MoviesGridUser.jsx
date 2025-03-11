import { useState, useEffect } from "react";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { useMovies } from "../../context/MoviesContext";
import { MovieSkeleton } from "../Movie/SkeletonMovie";

export const MoviesGridUser = () => {
  const { removeMovie, moviesUser } = useMovies();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (moviesUser.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [moviesUser]);

  const handleDeleteMovie = (id) => {
    removeMovie(id);
    toast.success("Película eliminada correctamente");
  };

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <MovieSkeleton key={index} />
          ))
        ) : moviesUser.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <p className="text-center text-gray-500">
              No tienes películas subidas
            </p>
          </div>
        ) : (
          moviesUser.map((movie) => (
            <div key={movie._id} className="group relative">
              <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <img
                  src={movie.image?.secure_url}
                  alt={movie.title}
                  className="w-full h-auto object-cover aspect-[2/3]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end space-x-2">
                    <button className="p-1.5 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors cursor-pointer">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors cursor-pointer"
                      onClick={() => handleDeleteMovie(movie._id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-900">
                  {movie.title}
                </h3>
                <p className="text-xs text-gray-500">{movie.year}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};
