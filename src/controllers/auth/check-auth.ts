import { Request, Response } from "express";

export const checkAuth = (req: Request, res: Response) => {
    console.log(req.cookies);
    if (req.session.userId) {
        res.json({ isAuthenticated: true, userId: req.session.id });
    } else {
        res.json({ isAuthenticated: false });
    }
};
