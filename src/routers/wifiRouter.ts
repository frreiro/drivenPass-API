import { Router } from "express";
import { createWifiSchema } from './../schema/schemas.js';
import { schemaValidate } from "../middlewares/schemaValidate.js";
import { createWifi, deleteWifi, getWifi, getWifis } from "../controllers/wifiController.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", schemaValidate(createWifiSchema), createWifi)
wifiRouter.get("/wifi", getWifis);
wifiRouter.get("/wifi/:id", getWifi);
wifiRouter.delete("/wifi/:id", deleteWifi)




export default wifiRouter;
