import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const JWT_SECRET = config.secretKey;

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const userFound = await User.findOne({ email });
  if (userFound) {
    return res.status(400).json(["El usuario ya existe"]);
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({
      id: userSaved._id,
      username: userSaved.username,
    });
    res.cookie("token", token);
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(400).json(["Usuario no existe, registrese ;)"]);
    }

    const matchPassword = await bcrypt.compare(password, userFound.password);

    if (!matchPassword) {
      return res.status(400).json(["Contraseña inválida"]);
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    });

    res.cookie("token", token);

    res.status(200).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).json({ msg: "Logout successfully" });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) {
    return res.status(404).json({ msg: "User not found" });
  }

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  });

  res.send("profile");
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, JWT_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado " });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
