import { schedulesServides } from "../services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.decoded.sub;
  const schedule = await schedulesServides.create(req.body, userId);
  return res.status(201).json({ message: "Schedule created" });
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const realEstateId = +req.params.id;
  const schedules = await schedulesServides.retrieve(realEstateId);
  return res.status(200).json(schedules);
};

export default { create, retrieve };
