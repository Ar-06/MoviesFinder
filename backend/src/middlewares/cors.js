import cors from "cors";

const ACCEPTED_ORIGIN = [
  "http://localhost:5173",
  "https://movies-finder-f61zf3df7-ar-06s-projects.vercel.app",
  "https://moviesfinder-aipi.onrender.com",
];

export const corsMiddleware = ({ acceptedOrigin = ACCEPTED_ORIGIN } = {}) =>
  cors({
    origin: (origin, callback) => {
      console.log("🔍 Origin recibido:", origin); // Agregar log para depuración

      if (!origin || acceptedOrigin.includes(origin)) {
        return callback(null, true);
      }

      console.error("🚫 Bloqueado por CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  });
