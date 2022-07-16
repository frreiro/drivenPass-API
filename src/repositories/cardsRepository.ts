import { CreateCard } from './../services/cardService.js';
import prisma from "../config/database.js";

export async function insert(cardData: CreateCard) {
    await prisma.cards.create({
        data: cardData
    })
}

export async function findByTitle(title: string, userId: number) {
    return await prisma.cards.findFirst({
        where: {
            title,
            AND: {
                userId,
            }
        }
    })
}

export async function findByNumber(number: string, userId: number) {
    return await prisma.cards.findFirst({
        where: {
            number,
            AND: {
                userId,
            }
        }
    })
}


export async function findByUser(userId: number) {
    return await prisma.cards.findMany({
        where: {
            userId,
        }
    })
}

export async function findByIdAndUser(id: number, userId: number) {
    return await prisma.cards.findMany({
        where: {
            id,
            AND: {
                userId,
            }
        }
    })
}


export async function deleteById(id: number, userId: number) {
    return await prisma.cards.deleteMany({
        where: {
            id,
            AND: {
                userId
            }
        }
    })
}
