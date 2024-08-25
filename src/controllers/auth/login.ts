import { Request, Response } from "express";

import prisma from "../../db/prisma";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Set user session
        // res.set("Set-Cookie", `userId=`${user.id}`)
        res.json({ message: "Login successful", userId: user.id });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
};
