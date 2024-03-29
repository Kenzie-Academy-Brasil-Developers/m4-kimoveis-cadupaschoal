import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const userReturnUpdateSchema = userSchema.omit({
  admin: true,
  password: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const userReadSchema = userReturnSchema.array();
const userUpdateSchema = userCreateSchema.omit({ admin: true }).partial();

export {
  userSchema,
  userCreateSchema,
  userReadSchema,
  userReturnSchema,
  userUpdateSchema,
  userReturnUpdateSchema,
};
