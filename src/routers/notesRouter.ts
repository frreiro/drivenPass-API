import { Router } from "express";
import { createNoteSchema } from './../schema/schemas.js';
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { createNotes, getNotes, getNote, deleteNote } from "../controllers/notesController.js";

const notesRouter = Router();

notesRouter.post("/notes", schemaValidate(createNoteSchema), createNotes);
notesRouter.get("/notes", getNotes);
notesRouter.get("/notes/:id", getNote);
notesRouter.delete("/notes/:id", deleteNote);





export default notesRouter;
