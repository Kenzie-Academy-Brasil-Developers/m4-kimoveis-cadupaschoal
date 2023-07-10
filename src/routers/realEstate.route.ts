import { Router } from "express";
import { createRealEstateSchema, realEstateSchema } from "../schemas";
import { realEstateController } from "../controllers";
import middlewares from "../middlewares";

export const realEstateRouter = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(createRealEstateSchema),
  realEstateController.create
);

realEstateRouter.get("", realEstateController.read);
