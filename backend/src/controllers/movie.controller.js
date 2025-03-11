import Movie from "../models/movies.model.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const createMovie = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title } = req.body;
    const username = req.user.username;

    const rating = Number(req.body.rating);
    const year = Number(req.body.year);

    const newMovie = new Movie({
      title,
      rating,
      year,
      recommendBy: username,
      createdAt: new Date(),
    });

    if (req.files?.image) {
      const image = await uploadImage(req.files.image.tempFilePath);
      newMovie.image = {
        public_id: image.public_id,
        secure_url: image.secure_url,
      };

      await fs.unlink(req.files.image.tempFilePath);
    }

    const movieSaved = await newMovie.save();

    res.status(201).json({
      id: movieSaved._id,
      title: movieSaved.title,
      year: movieSaved.year,
      rating: movieSaved.rating,
      recommendBy: movieSaved.recommendBy,
      image: movieSaved.image,
      createdAt: movieSaved.createdAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().select(
      "title rating year recommendBy image createdAt"
    );

    if (movies.length === 0) {
      return res.status(404).json({ message: "Movies not found" });
    }
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getMoviesByUser = async (req, res) => {
  try {
    const username = req.user.username;

    const movies = await Movie.find({ recommendBy: username }).select(
      "title rating year recommendBy image createdAt"
    );
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

// export const getMovieRecomendBy = async (req, res) => {
//   try {
//     const { recommendBy } = req.params;

//     const movies = await Movie.find({ recommendBy }).select(
//       "title assessment year recommendBy createdAt"
//     );

//     res.status(200).json(movies);
//   } catch (error) {
//     res.status(500).json({
//       msg: error.message,
//     });
//   }
// };

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    if (movie.image && movie.image.public_id) {
      await deleteImage(movie.image.public_id);
    }

    await Movie.findByIdAndDelete(id);

    res.status(200).json({ msg: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
