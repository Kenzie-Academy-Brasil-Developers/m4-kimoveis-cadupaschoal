import { Router } from "express";
import { realEstateController } from "../controllers";
import middlewares from "../middlewares";
import { createRealEstateSchema } from "../schemas/realEstate.schemas";

export const realEstateRouter = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(createRealEstateSchema),
  realEstateController.create
);

realEstateRouter.get("", realEstateController.read);
