import { Router } from "express";
import { userCreateSchema } from "../schemas";
import { userController } from "../controllers";
import middlewares from "../middlewares";

export const userRouter = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  userController.create
);
