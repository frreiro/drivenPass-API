import { authSchema } from './../schema/schemas.js';
import { Router } from "express";
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { signUp, signIn } from '../controllers/authController.js';

const authRouter = Router();


authRouter.post("/sign-up", schemaValidate(authSchema), signUp)
authRouter.post("/sign-in", schemaValidate(authSchema), signIn)

export default authRouter;