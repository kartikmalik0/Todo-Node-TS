import { Request, Response } from "express";

export const checkAuth = (req: Request, res: Response) => {
    if (req.session.userId) {
        res.json({ isAuthenticated: true, userId: req.session.id });
    } else {
        res.json({ isAuthenticated: false });
    }
};
