import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { corsMiddleware } from "./middlewares/cors.js";
import { RouterAuth } from "./routes/auth.routes.js";
import { RouterMovies } from "./routes/movies.routes.js";

export const app = express();

app.disable("x-powered-by");
app.use(corsMiddleware());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use("/auth", RouterAuth);
app.use("/movies", RouterMovies);

app.use("/", (req, res) => {
  res.send("Servidor MoviesFinder corriendo");
});
