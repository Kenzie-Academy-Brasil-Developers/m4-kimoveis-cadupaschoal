import { z } from "zod";
import { realEstateSchema } from "./realEstate.schemas";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const createCategorySchema = categorySchema.omit({ id: true });
const categoryRealEstateSchema = categorySchema.extend({
  RealEstate: realEstateSchema,
});

export { categorySchema, createCategorySchema, categoryRealEstateSchema };
