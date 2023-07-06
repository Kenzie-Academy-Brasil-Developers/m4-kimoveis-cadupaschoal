import { z } from "zod";
import { realEstateSchema } from "../schemas";

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45)
});

const createCategorySchema = categorySchema.omit({id: true});
const categoryRealEstateSchema = categorySchema.extend({
    real_state: realEstateSchema

});

export { categorySchema, createCategorySchema, categoryRealEstateSchema};