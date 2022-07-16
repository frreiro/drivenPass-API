import { Request, Response } from 'express';
import * as tokenService from "../utils/token.js"
import * as notesServices from "../services/notesServices.js"

import { ReceiveNotes } from '../services/notesServices.js';

export async function createNotes(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const notesData: ReceiveNotes = req.body;
    await notesServices.createNote({ ...notesData, userId: userData.id })
    res.sendStatus(200);
}

export async function getNotes(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const notes = await notesServices.getUserNotes(userData.id);
    res.send(notes).status(200);
}

export async function getNote(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const noteId = Number(req.params.id);
    const note = await notesServices.getUserNote(userData.id, noteId);
    res.send(note).status(200);
}

export async function deleteNote(req: Request, res: Response) {
    const userData = await tokenService.getUserIdByHeader(req.headers);
    const noteId = Number(req.params.id);
    await notesServices.deleteNote(userData.id, noteId);
    res.sendStatus(200);
}