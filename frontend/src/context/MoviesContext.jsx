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
        console.log("API Response:", res.data); // 👀 Verifica qué devuelve la API
        setMovies(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    getMoviesByUserRequest()
      .then((res) => {
        console.log("API Response:", res.data); // 👀 Verifica qué devuelve la API
        setMoviesUser(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching data:", err));
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
