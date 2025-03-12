import { createContext, useState, useContext, useEffect } from "react";
import {
  getMoviesRequest,
  deleteMoviesRequest,
  getMoviesByUserRequest,
} from "../api/movies.js";

const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moviesUser, setMoviesUser] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    getMoviesRequest()
      .then((res) => {
        console.log("🎬 API Response:", res.data); // 👀 Verifica la respuesta de la API
        if (Array.isArray(res.data)) {
          setMovies(res.data);
        } else {
          console.error("❌ La API no devolvió un array:", res.data);
          setMovies([]);
        }
      })
      .catch((err) => {
        console.error(
          "🚨 Error fetching movies:",
          err.response ? err.response.data : err.message
        );
      });
  }, []);

  useEffect(() => {
    getMoviesByUserRequest()
      .then((res) => {
        console.log("👤 API Response de User:", res.data); // 👀 Verifica la respuesta de la API
        if (Array.isArray(res.data)) {
          setMoviesUser(res.data);
        } else {
          console.error("❌ La API de usuario no devolvió un array:", res.data);
          setMoviesUser([]);
        }
      })
      .catch((err) => {
        console.error(
          "🚨 Error fetching user movies:",
          err.response ? err.response.data : err.message
        );
      });
  }, []);

  useEffect(() => {
    setFilterMovies(movies);
  }, [movies]);

  const searchMovies = (searchItems) => {
    if (!searchItems) {
      setFilterMovies(movies);
    } else {
      setFilterMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchItems.toLowerCase())
        )
      );
    }
  };

  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setMoviesUser([...moviesUser, newMovie]);
  };

  const removeMovie = async (id) => {
    try {
      await deleteMoviesRequest(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
      setMoviesUser((prevMoviesUser) =>
        prevMoviesUser.filter((movie) => movie._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addNewMovie,
        isModalOpen,
        setIsModalOpen,
        removeMovie,
        moviesUser,
        searchMovies,
        filterMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
