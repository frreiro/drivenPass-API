import prisma from "../config/database.js"
import { CreateNote } from "../services/notesServices.js"

export async function insert(notesData: CreateNote) {
    await prisma.notes.create({
        data: notesData
    })
}

export async function findByTitle(title: string, userId: number) {
    return await prisma.notes.findFirst({
        where: {
            title,
            AND: {
                userId,
            }
        }
    })
}

export async function findByUser(userId: number) {
    return await prisma.notes.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            title: true,
            note: true
        }
    })
}


export async function findByIdAndUser(id: number, userId: number) {
    return await prisma.notes.findMany({
        where: {
            id,
            AND: {
                userId,
            }
        },
        select: {
            id: true,
            title: true,
            note: true
        }
    })
}

export async function deleteById(id: number, userId: number) {
    return await prisma.notes.deleteMany({
        where: {
            id,
            AND: {
                userId
            }
        }
    })
}
