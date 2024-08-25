import { Router } from "express";
import authRoutes from "./AuthRoutes";

const rootRouter:Router = Router()

rootRouter.use("/auth", authRoutes)

export default rootRouter