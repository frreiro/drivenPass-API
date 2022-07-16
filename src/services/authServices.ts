import bcrypt from "bcrypt";
import { Users, Sessions } from "@prisma/client";
import * as userRepository from "./../repositories/usersRepository.js"
import * as tokenServices from "./../utils/token.js"

export type UserData = Omit<Users, "id">
export type SessionData = Omit<Sessions, "id" | "start">

export async function createUser({ email, password: rawPassword }: UserData) {
    const password = encryptPassword(rawPassword);
    await userExistence(email, true);
    await userRepository.insert({ email, password })
}

export async function loginUser({ email, password: rawPassword }: UserData) {
    const userData = await userExistence(email, false);
    const { id: userId, password: hashedPassword } = userData
    comparePassword(rawPassword, hashedPassword);
    const token = tokenServices.createToken(userId);
    await createSession({ token, userId, end: null })
    return token;
}

async function userExistence(email: string, creating: boolean) {
    const userEmail = await userRepository.findByEmail(email);
    if (creating && userEmail) throw { type: "Conflict" }
    if (!creating && !userEmail) throw { type: "Unprocessable Entity" }
    return userEmail
}

function encryptPassword(password: string) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
}

function comparePassword(password: string, hashedPassword: string) {
    if (!bcrypt.compareSync(password, hashedPassword)) throw { type: "Unprocessable Entity" }
}

async function createSession(sessionData: SessionData) {
    await userRepository.insertToken(sessionData);
}
