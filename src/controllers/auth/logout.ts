import { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
    req.session.destroy((err: any) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Could not log out, please try again" });
        }
        res.json({ message: "Logout successful" });
    });
};
