import { z } from "zod";
import {
  userCreateSchema,
  userReadSchema,
  userReturnSchema,
  userUpdateSchema,
} from "../schemas";
import { User } from "../entities";
import { Repository } from "typeorm";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = z.infer<typeof userUpdateSchema>;
type UserRepo = Repository<User>;

export { UserCreate, UserRead, UserReturn, UserUpdate, UserRepo };
