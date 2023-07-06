import { z } from "zod";
import {
  userCreateSchema,
  userReadSchema,
  userReturnSchema,
  userUpdateSchema,
} from "../schemas";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type IUserCreate = z.infer<typeof userCreateSchema>;
type IUserRead = z.infer<typeof userReadSchema>;
type IUserReturn = z.infer<typeof userReturnSchema>;
type IUserUpdate = DeepPartial<typeof userUpdateSchema>;
type IUserRepo = Repository<User>;

export { IUserCreate, IUserRead, IUserReturn, IUserUpdate, IUserRepo };
