import { Credentials } from '@prisma/client';
import * as utilsServices from "./../utils/utilsServices.js"
import * as credentialsRepository from "../repositories/credentalsRepository.js"

export type CreateCredential = Omit<Credentials, "id">
export type ReceiveCredential = Omit<CreateCredential, "userId">


export async function createCredential({ title, url, username, password: rawPassword, userId }: CreateCredential) {
    await titleValidade(title, userId);
    const password = utilsServices.passwordCryptrEncrypt(rawPassword);
    await credentialsRepository.insert({ title, url, username, password, userId });
}

async function titleValidade(title: string, userId: number) {
    const credential = await credentialsRepository.findByTitle(title, userId)
    if (credential) throw { type: "Conflict" }
}

export async function getCredentials(userId: number) {
    const userCredentials = await credentialsRepository.findByUser(userId)
    return utilsServices.changePasswordToDecrypt(userCredentials)
}

export async function getCredential(credentialId: number, userId: number) {
    if (!credentialId || !userId) throw { type: "Unprocessable Entity" }
    const userCredentials = await credentialsRepository.findByIdAndUser(credentialId, userId)
    return utilsServices.changePasswordToDecrypt(userCredentials)

}


export async function deleteCredential(credentialId: number, userId: number) {
    if (!credentialId || !userId) throw { type: "Unprocessable Entity" }
    const credential = await credentialsRepository.findByIdAndUser(credentialId, userId);
    if (credential.length === 0) throw { type: "Not Found" }
    await credentialsRepository.deleteById(credentialId, userId)
}