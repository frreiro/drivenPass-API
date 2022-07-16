import { ReceiveNotes } from './../services/notesServices';
import { ReceiveCredential } from './../services/credentialServices';
import { ReceiveWifi } from './../services/wifiServices';
import Joi from "joi";
import { ReceiveCard } from '../services/cardService';

export const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().length(10).required()
})

export const createCredentialSchema = Joi.object<ReceiveCredential>({
    title: Joi.string().max(50).required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
})

export const createNoteSchema = Joi.object<ReceiveNotes>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})

export const createWifiSchema = Joi.object<ReceiveWifi>({
    title: Joi.string().max(50).required(),
    ssd: Joi.string().required(),
    password: Joi.string().required()
})

export const createCardSchema = Joi.object<ReceiveCard>({
    title: Joi.string().max(50).required(),
    number: Joi.string().pattern(/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/).required(),
    cardHolderName: Joi.string().required(),
    securityCode: Joi.string().length(3).required(),
    expirationDate: Joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required(),
    password: Joi.string().length(4).required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid("debit", "credit", "debit_credit").required()
})

