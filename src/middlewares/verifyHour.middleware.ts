import { Schedule } from "../entities";
import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

export const verifyHour = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body;
  const { hour } = body;
  const [hours, minutes] = hour.split(":");
  const formatedHour = new Date();
  formatedHour.setHours(hours);
  formatedHour.setMinutes(minutes);

  if (formatedHour.getHours() < 8 || formatedHour.getHours() > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  return next();
};
