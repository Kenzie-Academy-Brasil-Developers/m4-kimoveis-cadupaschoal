import { RealEstate, Address } from "../entities";
import {
  realEstateRepository,
  addressRepository,
  categoryRepository,
} from "../repositories";
import { IReturnRealEstate } from "../interfaces";
import { AppError } from "../errors";

const create = async ({
  address,
  categoryId,
  ...payload
}: IReturnRealEstate) => {
  const findAddress = await addressRepository.findOneBy({
    ...address,
    number: address.number || "",
  });
  if (findAddress) throw new AppError("Address already exists", 409);

  const findCategory = await categoryRepository.findOneBy({ id: categoryId });
  if (!findCategory) throw new AppError("Category not found", 404);

  const newAddress: Address = await addressRepository.save(address);

  const resCreate: RealEstate = await realEstateRepository.save({
    ...payload,
    address: newAddress,
    category: findCategory,
  });

  return resCreate;
};

const read = async (): Promise<IReturnRealEstate[]> => {
  return await realEstateRepository.find({
    relations: { address: true },
  });
};

export default { create, read };
