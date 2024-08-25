import prisma from "../../db/prisma";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        if (req.session) {
            req.session.id = newUser.id;
        }

        res.status(201).json({
            message: "User registered successfully",
            userId: newUser.id,
        });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
};
