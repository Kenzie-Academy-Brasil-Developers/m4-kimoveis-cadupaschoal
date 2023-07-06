import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { User } from "../entities";
import { userRepository } from "../repositories";

export const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const email: string = req.body.email;
    if(!email) return next();

    const findEmail: User | null = await userRepository.findOneBy({ email });

    if(findEmail) throw new AppError("Email already exists", 409);

    return next();

};