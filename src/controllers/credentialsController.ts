import { Request, Response } from 'express';
import * as credentialServices from "./../services/credentialServices.js"
import * as tokenService from "./../utils/token.js"
import { ReceiveCredential } from "../services/credentialServices.js";

export async function createCredential(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const credentialData: ReceiveCredential = req.body;
    await credentialServices.createCredential({ ...credentialData, userId: userData.id })
    res.sendStatus(200);
}

export async function getCredentials(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const userCredential = await credentialServices.getCredentials(userData.id);
    res.send(userCredential).status(200);
}

export async function getCredential(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const credentialId = Number(req.params.id);
    const userCredential = await credentialServices.getCredential(credentialId, userData.id);
    res.send(userCredential).status(200);
}

export async function deleteCredential(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const credentialId = Number(req.params.id);
    await credentialServices.deleteCredential(credentialId, userData.id);
    res.sendStatus(200);
}
