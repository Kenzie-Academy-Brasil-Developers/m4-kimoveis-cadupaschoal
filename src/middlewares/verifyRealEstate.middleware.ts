import { Schedule } from "../entities";
import { AppError } from "../errors";
import { realEstateRepository } from "../repositories";
import { Request, Response, NextFunction } from "express";

export const verifyRealEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body;
  const param = +req.params.id;
  const { realEstateId } = body;
  const findRealEstateBody = await realEstateRepository.findOneBy({
    id: realEstateId,
  });
  const findRealEstateParam = await realEstateRepository.findOneBy({
    id: param,
  });

  if (!findRealEstateBody || !findRealEstateParam)
    throw new AppError("RealEstate not found", 404);

  return next();
};
