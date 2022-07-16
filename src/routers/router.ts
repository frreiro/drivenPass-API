import { Router } from "express";
import authRouter from "./authenticateRouter.js";
import cardsRouter from "./cardsRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import notesRouter from "./notesRouter.js";
import wifiRouter from "./wifiRouter.js";

const appRouters = Router();

appRouters.use(authRouter);
appRouters.use(credentialsRouter);
appRouters.use(notesRouter)
appRouters.use(wifiRouter)
appRouters.use(cardsRouter)

export default appRouters;