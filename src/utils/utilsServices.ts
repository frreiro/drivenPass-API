import cryptr from "./cryptr.js";
import { Credentials, Wifi, Cards } from "@prisma/client";

export function passwordCryptrEncrypt(password: string) {
    return cryptr.encrypt(password);
}

export function passwordCryptrDecrypt(password: string) {
    return cryptr.decrypt(password);
}

export function changePasswordToDecrypt(userObject: Credentials[] | Wifi[]) {
    return userObject.map((entity: Credentials | Wifi) => {
        entity.password = passwordCryptrDecrypt(entity.password)
        delete entity.userId
        return entity;
    })
}

export function changePasswordAndSecurityCodeToDecrypt(cards: Cards[]) {
    return cards.map(card => {
        card.password = passwordCryptrDecrypt(card.password);
        card.securityCode = passwordCryptrDecrypt(card.securityCode);
        delete card.userId
        return card;
    })
}
