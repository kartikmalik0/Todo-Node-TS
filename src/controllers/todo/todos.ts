import { Request, Response } from "express";
import prisma from "../../db/prisma";

// Get all todos for a user
export const fetchTodo = async (req: Request, res: Response) => {
    const { id: userid } = req.params;
    if (!userid) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const todos = await prisma.todo.findMany({
            where: { userId: userid },
        });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "Error fetching todos" });
    }
};

// Create a new todo
export const createTodo = async (req: Request, res: Response) => {
    const { userid, title, description } = req.body;
    console.log(description)
    if (!userid) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const newTodo = await prisma.todo.create({
            data: {
                title,
                description,
                userId: userid,
            },
        });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: "Error creating todo" });
    }
};

// Update a todo
export const updateTodo = async (req: Request, res: Response) => {
    const { userid, id, title, description } = req.body;
    if (!userid) {
        return res.status(400).json({ error: "User ID is required" });
    }
    if (!id) {
        return res.status(400).json({ error: "Todo ID is required" });
    }

    try {
        const updatedTodo = await prisma.todo.updateMany({
            where: {
                id: id,
                userId: userid,
            },
            data: {
                title,
                description,
            },
        });

        if (updatedTodo.count === 0) {
            return res
                .status(404)
                .json({ error: "Todo not found or not owned by user" });
        }

        res.json({ message: "Todo updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating todo" });
    }
};

// Delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
    const { userid, id } = req.body;
    if (!userid) {
        return res.status(400).json({ error: "User ID is required" });
    }
    if (!id) {
        return res.status(400).json({ error: "Todo ID is required" });
    }

    try {
        const deletedTodo = await prisma.todo.deleteMany({
            where: {
                id: id,
                userId: userid,
            },
        });

        if (deletedTodo.count === 0) {
            return res
                .status(404)
                .json({ error: "Todo not found or not owned by user" });
        }

        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting todo" });
    }
};
