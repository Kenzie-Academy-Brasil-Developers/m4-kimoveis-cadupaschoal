import { Router } from "express";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userController } from "../controllers";
import middlewares from "../middlewares";

export const userRouter = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userController.create
);

userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.read
);
// userRouter.use("/:id", middlewares.idExists);

userRouter.patch(
  "/:id",
  middlewares.validateBody(userUpdateSchema),
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isAdminOrOwner,
  userController.update
);

userRouter.delete(
  "/:id",
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.erase
);
