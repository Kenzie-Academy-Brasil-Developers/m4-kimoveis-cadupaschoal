import { Router } from "express";
import { createRealEstateSchema } from "../schemas";
import { realEstateController } from "../controllers";
import middlewares from "../middlewares";

export const realEstateRouter = Router();

realEstateRouter.post("",
    middlewares.validateBody(createRealEstateSchema),
    middlewares.verifyToken,
    middlewares.isAdmin,
    realEstateController.create)
