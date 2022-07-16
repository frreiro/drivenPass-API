import prisma from "../config/database.js";
import { CreateWifi } from "../services/wifiServices.js";

export async function insert(wifiData: CreateWifi) {
    await prisma.wifi.create({
        data: wifiData
    })
}

export async function findByTitle(title: string, userId: number) {
    return await prisma.wifi.findFirst({
        where: {
            title,
            AND: {
                userId,
            }
        }
    })
}

export async function findByUser(userId: number) {
    return await prisma.wifi.findMany({
        where: {
            userId,
        }
    })
}

export async function findByIdAndUser(id: number, userId: number) {
    return await prisma.wifi.findMany({
        where: {
            id,
            AND: {
                userId,
            }
        }
    })
}


export async function deleteById(id: number, userId: number) {
    return await prisma.wifi.deleteMany({
        where: {
            id,
            AND: {
                userId
            }
        }
    })
}
