import { createContext, useState, useContext, useEffect } from "react";
import {
  getMoviesRequest,
  deleteMoviesRequest,
  getMoviesByUserRequest,
} from "../api/movies.js";
import { useAuth } from "./AuthContext.jsx";

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
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    getMoviesRequest()
      .then((res) => {
        if (Array.isArray(res.data)) {
          setMovies(res.data);
        } else {
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
    if (isAuthenticated) {
      getMoviesByUserRequest()
        .then((res) => {
          if (Array.isArray(res.data)) {
            setMoviesUser(res.data);
          } else {
            setMoviesUser([]);
          }
        })
        .catch((err) => {
          console.error(
            "🚨 Error fetching user movies:",
            err.response ? err.response.data : err.message
          );
        });
    }
  }, [isAuthenticated]);

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
