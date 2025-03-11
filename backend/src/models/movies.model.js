import mongoose from "mongoose";

const MovieScehema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    recommendBy: {
      type: String,
      required: true,
    },
    image: {
      public_id: String,
      secure_url: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Movie", MovieScehema);
