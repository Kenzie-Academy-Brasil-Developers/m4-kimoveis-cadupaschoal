import { Router } from "express";
import { scheduleSchema, createScheduleSchema } from "../schemas";
import { scheduleController } from "../controllers";
import middlewares from "../middlewares";

export const scheduleRouter = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(createScheduleSchema),
  middlewares.verifyDay,
  middlewares.verifyHour,
  middlewares.verifyRealEstate,
  scheduleController.create
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyRealEstate,
  middlewares.verifyToken,
  middlewares.isAdmin,
  scheduleController.retrieve
);
