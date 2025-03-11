import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { MovieSkeleton } from "../Movie/SkeletonMovie";

export const MoviesGrid = ({ movies }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movies.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [movies]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Películas recomendadas 🎬
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <MovieSkeleton key={index} />
          ))
        ) : movies.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <p className="text-center text-gray-500">
              Peliculas no disponibles
            </p>
          </div>
        ) : (
          movies.map((movie) => (
            <div key={movie._id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <img
                  src={movie.image?.secure_url}
                  alt={movie.title}
                  className="w-full h-auto object-cover aspect-[2/3]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <div className="flex items-center mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm ml-1">
                      {movie.rating}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-white">
                      Recomendado por {movie.recommendBy}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">
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
