import express, { Router } from "express";
import { register } from "../controllers/auth/register";
import { login } from "../controllers/auth/login";
import { logout } from "../controllers/auth/logout";
import { checkAuth } from "../controllers/auth/check-auth";

const authRoutes:Router = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.patch("/logout", logout);
authRoutes.get("/check-auth", checkAuth);

export default authRoutes;
