import { AppError } from "../errors";
import { User, Category } from "../entities";
import { Request, Response, NextFunction } from "express";
import { categoryRepository, userRepository } from "../repositories";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);
  if (req.baseUrl === "/users") {
    const foundUser: User | null = await userRepository.findOneBy({ id });
    if (!foundUser) throw new AppError("User not found", 404);

    res.locals = {
      ...res.locals,
      foundUser,
    };

    return next();
  }

  const foundCategories: Category | null = await categoryRepository.findOneBy({
    id,
  });

  if (!foundCategories) throw new AppError("Category not found", 404);

  return next();
};
