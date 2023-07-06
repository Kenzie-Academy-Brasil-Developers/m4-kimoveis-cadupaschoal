import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";

export const uniqueCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const name: string = req.body.name;

    const findName: Category | null = await categoryRepository.findOneBy({ name });

    if(findName) throw new AppError("Category already exists", 409);

    return next();

};
