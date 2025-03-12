import axios from "./axiosMovies";

export const getMoviesRequest = () => axios.get("/");
export const postMovieRequest = (movie) =>
  axios.post("/register", movie, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const getMoviesByUserRequest = () =>
  axios.get("/me", { withCredentials: true });
export const deleteMoviesRequest = (id) => axios.delete(`/${id}`);
