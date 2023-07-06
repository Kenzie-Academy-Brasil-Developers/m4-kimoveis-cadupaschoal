import { Category } from "../entities";
import { categoryServices } from "../services";
import { Request, Response } from "express";
import { ICategory, ICategoryRealEstate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: ICategory = await categoryServices.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories: ICategory[] = await categoryServices.read();
  return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const categoriesRealEstate: ICategoryRealEstate = await categoryServices.retrieve(+req.params.id);
  return res.status(200).json(categoriesRealEstate);
}
export default { create, read, retrieve };