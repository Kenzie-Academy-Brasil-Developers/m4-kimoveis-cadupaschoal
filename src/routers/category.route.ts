import { Router } from "express";
import { categorySchema, createCategorySchema } from "../schemas";
import { categoryController} from "../controllers";
import middlewares from "../middlewares";

export const categoryRouter = Router();

categoryRouter.post("",
    middlewares.validateBody(createCategorySchema),
    middlewares.uniqueCategoryName,
    middlewares.verifyToken,
    middlewares.isAdmin,
    categoryController.create
);

categoryRouter.get("",categoryController.read);

categoryRouter.get(
    "/:id/realEstate",
    middlewares.idExists,
    categoryController.retrieve
);
