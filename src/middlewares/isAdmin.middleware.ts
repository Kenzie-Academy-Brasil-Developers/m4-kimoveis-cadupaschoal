import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin = res.locals.decoded.admin;
  if (!admin) throw new AppError("Insufficient permission", 403);

  return next();
};
