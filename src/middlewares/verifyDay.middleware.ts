import { Schedule } from "../entities";
import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

export const verifyDay = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body;
  const { date } = body;
  const toDate = new Date(date);
  const formatedDay = toDate.getDay();

  if (formatedDay === 0 || formatedDay === 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);

  return next();
};
