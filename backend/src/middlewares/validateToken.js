import jwt from "jsonwebtoken";
import { config } from "../config.js";

export const authRequires = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Failed to authenticate token" });
    }
    req.user = decoded;
    next();
  });
};
