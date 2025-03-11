import cors from "cors";

const ACCEPTED_ORIGIN = [
  "http://localhost:5173",
  "https://movies-finder-f61zf3df7-ar-06s-projects.vercel.app",
  "https://moviesfinder-aipi.onrender.com/",
];

export const corsMiddleware = ({ acceptedOrigin = ACCEPTED_ORIGIN } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigin.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  });
