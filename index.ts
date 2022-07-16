import express from "express";
import "express-async-errors"
import cors from "cors";
import dotenv from "dotenv"
import appRouters from "./src/routers/router.js";
import { errorHandle } from "./src/middlewares/errorHandleMiddleware.js";
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use(appRouters)
app.use(errorHandle);

const port = +process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})