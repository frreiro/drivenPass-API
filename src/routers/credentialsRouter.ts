import { Router } from "express";
import { createCredential, deleteCredential, getCredential, getCredentials } from "../controllers/credentialsController.js";
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { createCredentialSchema } from './../schema/schemas.js';

const credentialsRouter = Router();

credentialsRouter.post("/credentials", schemaValidate(createCredentialSchema), createCredential)
credentialsRouter.get("/credentials", getCredentials);
credentialsRouter.get("/credentials/:id", getCredential);
credentialsRouter.delete("/credentials/:id", deleteCredential);

export default credentialsRouter;