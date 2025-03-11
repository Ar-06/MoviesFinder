import { config } from "../config.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = config.secretKey;

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
