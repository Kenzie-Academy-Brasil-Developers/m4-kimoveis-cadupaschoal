import { z } from "zod";
import { categorySchema, createCategorySchema,categoryRealEstateSchema } from "../schemas";

type ICategory = z.infer<typeof categorySchema>
type ICategoryCreate = z.infer<typeof createCategorySchema>;
type ICategoryRealEstate = z.infer<typeof categoryRealEstateSchema>;
export { ICategory, ICategoryCreate, ICategoryRealEstate };
