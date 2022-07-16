import { Request, Response } from 'express';
import { ReceiveCard } from '../services/cardService.js';
import * as tokenServices from "../utils/token.js"
import * as cardsServices from "../services/cardService.js"


export async function createCard(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const cardData: ReceiveCard = req.body;
    await cardsServices.createCard({ ...cardData, userId: userData.id })
    res.sendStatus(201);
}

export async function getUserCards(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const cards = await cardsServices.getCards(userData.id)
    res.send(cards).status(200);
}

export async function getUserCard(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const cardId = Number(req.params.id)
    const cards = await cardsServices.getCard(cardId, userData.id)
    res.send(cards).status(200);
}

export async function deleteUserCard(req: Request, res: Response) {
    const userData = await tokenServices.getUserIdByHeader(req.headers);
    const cardId = Number(req.params.id)
    await cardsServices.deleteCard(cardId, userData.id)
    res.sendStatus(200);
}