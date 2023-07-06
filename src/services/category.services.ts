import { Category } from "../entities";
import { categoryRealEstateSchema } from "../schemas";
import { categoryRepository } from "../repositories";
import { ICategoryCreate,ICategoryRealEstate } from "../interfaces";


const create = async (payload: ICategoryCreate): Promise<Category> => {
    const category: Category = categoryRepository.create(payload);
    await categoryRepository.save(category);
    return category;
  };

const read = async (): Promise<Category[]> => {
    return await categoryRepository.find();
     
};

const retrieve = async (categoryId: number): Promise<ICategoryRealEstate> => {
  return categoryRealEstateSchema.parse(
    await categoryRepository.findOne({
       where: { id: categoryId },
       relations: { real_estate: true },
      })
  );
};


export default { create, read, retrieve };