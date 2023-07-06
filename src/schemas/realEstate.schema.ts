import { z } from "zod";
import { createAddress as address, addressSchema } from "./address.schemas";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().or(z.string()).default(0),
    size: z.number().positive(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()).nullable(),
    addressId: z.number(),
    categoryId: z.number().positive(), 
});

const createRealEstateSchema = realEstateSchema
.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    addressId: true,  
})
.extend({address})


const returnRealEstateSchema = realEstateSchema
.extend({address: addressSchema})

export { realEstateSchema, createRealEstateSchema, returnRealEstateSchema };