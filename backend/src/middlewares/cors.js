import cors from "cors";

const ACCEPTED_ORIGIN = [
  "http://localhost:5173",
  "https://movies-finder-five.vercel.app",
  "https://moviesfinder-production.up.railway.app",
  "https://moviesfinder-rjgp.onrender.com",
];

export const corsMiddleware = ({ acceptedOrigin = ACCEPTED_ORIGIN } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (!origin || acceptedOrigin.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  });
