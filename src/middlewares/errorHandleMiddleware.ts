import { Request, Response, NextFunction } from "express";

export async function errorHandle(error, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    if (error.type === "Conflict") return res.sendStatus(409);
    if (error.type === "Unprocessable Entity") return res.sendStatus(422);
    if (error.type === "Not Found") return res.sendStatus(404);
    if (error.type === "Unauthorized") return res.sendStatus(401);
    return res.sendStatus(500);
}