import { Wifi } from "@prisma/client";
import * as utilsServices from "../utils/utilsServices.js"
import * as wifiRepository from "../repositories/wifiRepository.js"

export type CreateWifi = Omit<Wifi, "id">;
export type ReceiveWifi = Omit<CreateWifi, "userId">

export async function create({ title, ssd, password: rawPassword, userId }: CreateWifi) {
    const password = utilsServices.passwordCryptrEncrypt(rawPassword);
    await wifiRepository.insert({ title, ssd, password, userId });
}

export async function getWifis(userId: number) {
    if (!userId) throw { type: "Unprocessable Entity" }
    const wifis = await wifiRepository.findByUser(userId);
    return utilsServices.changePasswordToDecrypt(wifis)
}

export async function getWifi(wifiId: number, userId: number) {
    if (!userId || !wifiId) throw { type: "Unprocessable Entity" }
    const wifi = await wifiRepository.findByIdAndUser(wifiId, userId);
    if (wifi.length === 0) throw { type: "Not Found" }
    return utilsServices.changePasswordToDecrypt(wifi)

}

export async function deleteWifi(userId: number, wifiId: number) {
    if (!wifiId || !userId) throw { type: "Unprocessable Entity" }
    const wifi = await wifiRepository.findByIdAndUser(wifiId, userId);
    if (wifi.length === 0) throw { type: "Not Found" }
    await wifiRepository.deleteById(wifiId, userId);
}



