import { RealEstate } from "../entities";
import { realEstateServices } from "../services";
import { Request, Response } from "express";
import { IReturnRealEstate } from "../interfaces";
const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: IReturnRealEstate = await realEstateServices.create(req.body);
  return res.status(201).json(realEstate);
};

export default { create };