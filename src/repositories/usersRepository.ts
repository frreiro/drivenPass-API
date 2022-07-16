import prisma from "../config/database.js";
import { UserData, SessionData } from "../services/authServices.js";

export async function insert(userData: UserData) {
    await prisma.users.create({
        data: userData
    })
}

export async function findByEmail(email: string) {
    const userEmail = await prisma.users.findFirst({
        where: {
            email
        }
    })
    return userEmail
}


export async function findById(id: number) {
    const user = await prisma.users.findFirst({
        where: {
            id
        }
    })
    return user
}



export async function insertToken(sessionData: SessionData) {
    await prisma.sessions.create({
        data: sessionData
    })
}
