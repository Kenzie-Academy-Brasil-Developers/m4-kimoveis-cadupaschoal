import { z } from "zod";
import { createAddress, addressSchema, createCategorySchema } from "../schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()).nullable(),
  // addressId: z.number(),
  // categoryId: z.number().positive(),
});

const createRealEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: createAddress,
  categoryId: z.number().positive(),
});

const returnRealEstateSchema = realEstateSchema.extend({
  address: addressSchema,
});

export { realEstateSchema, createRealEstateSchema, returnRealEstateSchema };
