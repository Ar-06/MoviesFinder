import { Router } from "express";
import {
  createMovie,
  getMovies,
  getMoviesByUser,
  // getMovieRecomendBy,
  deleteMovie,
} from "../controllers/movie.controller.js";
import { authRequires } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerMovieSchema } from "../schemas/movies.schema.js";
import fileUpload from "express-fileupload";

export const RouterMovies = Router();

RouterMovies.post(
  "/register",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  validateSchema(registerMovieSchema),
  authRequires,
  createMovie
);
RouterMovies.get("/", getMovies);
RouterMovies.get("/me", authRequires, getMoviesByUser);
// RouterMovies.get("/:recommendBy", getMovieRecomendBy);
RouterMovies.delete("/:id", authRequires, deleteMovie);
