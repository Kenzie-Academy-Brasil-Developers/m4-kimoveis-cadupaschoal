import { z } from "zod";
import { addressSchema, categorySchema } from "../schemas";
import { createAddress } from "./address.schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().positive().or(z.string()),
  size: z.number().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()).nullable(),
  categoryId: z.number().positive(),
  // addressId: z.number(),
});

const createRealEstateSchema = z.object({
  value: z.number().positive().or(z.string()),
  size: z.number().positive().int(),
  categoryId: z.number().positive(),
  address: createAddress,
});

const returnRealEstateSchema = realEstateSchema
  .omit({
    categoryId: true,
  })
  .extend({
    address: addressSchema,
    category: categorySchema,
  });

export { realEstateSchema, createRealEstateSchema, returnRealEstateSchema };
