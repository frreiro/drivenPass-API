import { Request, Response } from "express";
import { ReceiveWifi } from "../services/wifiServices.js";
import * as tokenServices from "../utils/token.js"
import * as wifiServices from "../services/wifiServices.js"

export async function createWifi(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const wifiData: ReceiveWifi = req.body;
    await wifiServices.create({ ...wifiData, userId: userData.id })
    res.sendStatus(200);
}

export async function getWifis(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const wifis = await wifiServices.getWifis(userData.id);
    res.send(wifis).status(200);
}

export async function getWifi(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const wifiId = Number(req.params.id);
    const wifi = await wifiServices.getWifi(wifiId, userData.id);
    res.send(wifi).status(200);
}

export async function deleteWifi(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const wifiId = Number(req.params.id);
    await wifiServices.deleteWifi(userData.id, wifiId)
    res.sendStatus(201);
}