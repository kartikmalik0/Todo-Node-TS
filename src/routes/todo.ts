import express from "express";
import {
    createTodo,
    deleteTodo,
    fetchTodo,
    updateTodo,
} from "../controllers/todo/todos";

const todosRouter = express.Router();

todosRouter.get("/fetch-todos/:id", fetchTodo);
todosRouter.post("/create-todo", createTodo);
todosRouter.delete("/delete-todo", deleteTodo);
todosRouter.put("/update-todo/", updateTodo);

export default todosRouter;
