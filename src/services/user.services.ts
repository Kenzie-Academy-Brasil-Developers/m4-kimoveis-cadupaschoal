import { User } from "../entities";
import { userRepository } from "../repositories";
import { UserCreate, UserReturn } from "../interfaces";
import { userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

export default { create };
