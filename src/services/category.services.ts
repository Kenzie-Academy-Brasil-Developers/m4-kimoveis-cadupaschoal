import { Category } from "../entities";
import { categoryRealEstateSchema } from "../schemas";
import { categoryRepository } from "../repositories";
import { ICategoryCreate, ICategoryRealEstate } from "../interfaces";
import { AppError } from "../errors";

const create = async (payload: ICategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);
  return category;
};

const read = async (): Promise<Category[]> => {
  return await categoryRepository.find();
};

const retrieve = async (categoryId: number): Promise<Category> => {
  const category = await categoryRepository.findOne({
    where: { id: categoryId },
    relations: { realEstate: true },
  });

  if (!category) throw new AppError("Category not found", 404);

  const response = {
    id: category.id,
    name: category.name,
    realEstate: category.realEstate,
  };

  return response;
};

export default { create, read, retrieve };
