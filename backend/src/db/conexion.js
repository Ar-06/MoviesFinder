import mongoose from "mongoose";
import { config } from "../config.js";

const MOGODB_URI = config.mongouir

export const connectDB = async () => {
  try {
    await mongoose.connect(MOGODB_URI);
    console.log("Conexion establecida");
  } catch (error) {
    console.log(error);
  }
};
