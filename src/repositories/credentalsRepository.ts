import prisma from "../config/database.js";
import { CreateCredential } from "../services/credentialServices.js";

export async function insert(credentialData: CreateCredential) {
    await prisma.credentials.create({
        data: credentialData
    })
}

export async function findByTitle(title: string, userId: number) {
    return await prisma.credentials.findFirst({
        where: {
            title,
            AND: {
                userId,
            }
        }
    })
}

export async function findByUser(userId: number) {
    return await prisma.credentials.findMany({
        where: {
            userId,
        }
    })
}

export async function findByIdAndUser(id: number, userId: number) {
    return await prisma.credentials.findMany({
        where: {
            id,
            AND: {
                userId,
            }
        }
    })
}


export async function deleteById(id: number, userId: number) {
    return await prisma.credentials.deleteMany({
        where: {
            id,
            AND: {
                userId
            }
        }
    })
}
