import { userServices } from "../services";
import { Request, Response } from "express";
import { IUserRead, IUserReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: IUserReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.decoded.admin;
  const users: IUserRead = await userServices.read();

  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const user = await userServices.update(res.locals.foundUser, req.body);

  return res.status(200).json(user);
};

const erase = async (req: Request, res: Response): Promise<Response> => {
  await userServices.erase(res.locals.foundUser);

  return res.status(204).send();
};
export default { create, read, update, erase };
