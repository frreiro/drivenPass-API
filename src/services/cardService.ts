import { Cards } from "@prisma/client";
import * as utilsServices from "../utils/utilsServices.js"
import * as cardsRepository from "../repositories/cardsRepository.js"

export type CreateCard = Omit<Cards, "id">
export type ReceiveCard = Omit<CreateCard, "userId">

export async function createCard(cardData: CreateCard) {
    await titleValidade(cardData.title, cardData.userId);
    await cardNumberValidate(cardData.number, cardData.userId);
    const password = utilsServices.passwordCryptrEncrypt(cardData.password);
    const securityCode = utilsServices.passwordCryptrEncrypt(cardData.securityCode);
    await cardsRepository.insert({ ...cardData, password, securityCode })
}

async function titleValidade(title: string, userId: number) {
    const card = await cardsRepository.findByTitle(title, userId)
    if (card) throw { type: "Conflict" }
}

async function cardNumberValidate(number: string, userId: number) {
    const card = await cardsRepository.findByNumber(number, userId)
    if (card) throw { type: "Conflict" }
}


export async function getCards(userId: number) {
    if (!userId) throw { type: "Unprocessable Entity" }
    const cards = await cardsRepository.findByUser(userId);
    return utilsServices.changePasswordAndSecurityCodeToDecrypt(cards);
}

export async function getCard(cardId: number, userId: number) {
    if (!userId || !cardId) throw { type: "Unprocessable Entity" }
    const card = await cardsRepository.findByIdAndUser(cardId, userId)
    if (card.length === 0) throw { type: "Not Found" }
    return utilsServices.changePasswordAndSecurityCodeToDecrypt(card);
}

export async function deleteCard(cardId: number, userId: number) {
    if (!userId || !cardId) throw { type: "Unprocessable Entity" }
    const card = await cardsRepository.findByIdAndUser(cardId, userId)
    if (card.length === 0) throw { type: "Not Found" }
    await cardsRepository.deleteById(cardId, userId)
}