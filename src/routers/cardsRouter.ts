import { Router } from "express";
import { createCard, getUserCards, getUserCard, deleteUserCard } from "../controllers/cardsController.js";
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { createCardSchema } from "../schema/schemas.js";

const cardsRouter = Router();

cardsRouter.post("/cards", schemaValidate(createCardSchema), createCard)
cardsRouter.get("/cards", getUserCards);
cardsRouter.get("/cards/:id", getUserCard);
cardsRouter.delete("/cards/:id", deleteUserCard);

export default cardsRouter;