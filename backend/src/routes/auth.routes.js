import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken
} from "../controllers/auth.controller.js";
import { authRequires } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

export const RouterAuth = Router();

RouterAuth.post("/register", validateSchema(registerSchema), register);
RouterAuth.post("/login", validateSchema(loginSchema), login);
RouterAuth.post("/logout", logout);
RouterAuth.get("/profile", authRequires, profile);
RouterAuth.get("/verify", verifyToken)
