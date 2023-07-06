import { User } from "../entities";
import { AppError } from "../errors";
import { Category } from "../entities";
import { categoryRepository, userRepository } from "../repositories";
import { Request, Response, NextFunction } from "express";

export const idExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id);

    if(req.baseUrl === "/users"){
        const foundUser: User | null = await userRepository.findOneBy({ id });
    
        if(!foundUser) throw new AppError("User not found", 404);
    
        res.locals = {
            ...res.locals,
            foundUser
        };
    }

    const foundCategories: Category | null = await categoryRepository.findOneBy({ id });

    if(!foundCategories) throw new AppError("Category not found", 404);
    
    return next();
};