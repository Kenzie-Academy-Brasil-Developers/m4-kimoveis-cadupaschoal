import { User } from "../entities";
import { userRepository } from "../repositories";
import {
  IUserCreate,
  IUserReturn,
  IUserRead,
  IUserUpdate,
} from "../interfaces";
import {
  userReadSchema,
  userReturnSchema,
  userUpdateSchema,
  userReturnUpdateSchema,
} from "../schemas";

const create = async (payload: IUserCreate): Promise<IUserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const read = async (): Promise<IUserRead> => {
  const usersList: User[] = await userRepository.find({ withDeleted: true });
  return userReadSchema.parse(usersList);
};

const update = async (user: User, payload: IUserUpdate) => {
  const userUpdate: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(userUpdate);

  return userReturnSchema.parse(userUpdate);
};

const erase = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, erase };
