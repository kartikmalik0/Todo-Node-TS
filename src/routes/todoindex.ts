import { Router } from "express";
import todosRouter from "./todo";

const todosRootRouter: Router = Router();

todosRootRouter.use("/todos", todosRouter);

export default todosRootRouter;
