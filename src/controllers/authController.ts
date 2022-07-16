import { Request, Response } from "express";
import * as authService from "../services/authServices.js"

export async function signUp(req: Request, res: Response) {
    const userData = req.body;
    await authService.createUser(userData);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const userData = req.body;
    const token = await authService.loginUser(userData)
    res.send(token).status(200);
}