import { Notes } from "@prisma/client"
import * as notesRepository from "../repositories/notesRepository.js"

export type CreateNote = Omit<Notes, "id">
export type ReceiveNotes = Omit<CreateNote, "userId">

export async function createNote(notesData: CreateNote) {
    if (!notesData.title || !notesData.userId) throw { type: "Unprocessable Entity" }
    const note = await notesRepository.findByTitle(notesData.title, notesData.userId);
    if (note) throw { type: "Conflict" }
    await notesRepository.insert(notesData);
}

export async function getUserNotes(userId: number) {
    if (!userId) throw { type: "Unprocessable Entity" }
    const notes = await notesRepository.findByUser(userId);
    return notes;
}

export async function getUserNote(userId: number, noteId: number) {
    if (!noteId || !userId) throw { type: "Unprocessable Entity" }
    const note = await notesRepository.findByIdAndUser(noteId, userId);
    if (note.length === 0) throw { type: "Not Found" }
    return note;
}


export async function deleteNote(userId: number, noteId: number) {
    if (!noteId || !userId) throw { type: "Unprocessable Entity" }
    const note = await notesRepository.findByIdAndUser(noteId, userId);
    if (note.length === 0) throw { type: "Not Found" }
    await notesRepository.deleteById(noteId, userId);
}
