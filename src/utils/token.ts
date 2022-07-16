import { Request } from "express";
import jwt from "jsonwebtoken"
import * as userRepository from "../repositories/usersRepository.js"

const JWT_KEY = process.env.JWT_KEY;

export function createToken(userId: number) {
    const token = jwt.sign({ id: userId }, JWT_KEY)
    return token;
}

function extractToken(headers: Request["headers"]) {
    const { authorization } = headers;
    if (!authorization) throw { type: "Unauthorized" }
    const token = authorization.split("Bearer").at(1).trim();
    if (token === "undefined" || null || undefined) throw { type: "Unauthorized" }
    return token
}

export async function getUserIdByHeader(headers: Request["headers"]) {
    const token = extractToken(headers);
    const userData = await verifyToken(token);
    await validateUserId(userData.id);
    return userData;
}


async function verifyToken(token: string) {
    try {
        const user: any = jwt.verify(token, JWT_KEY);
        return user
    } catch (e) {
        throw { type: "Unprocessable Entity" }
    }
}

async function validateUserId(userId: number) {
    const user = await userRepository.findById(userId);
    if (!user) throw { type: "Unauthorized" }
}

