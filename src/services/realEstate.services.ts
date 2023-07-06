import { RealEstate, Address } from "../entities";
import { realEstateSchema, addressSchema, returnRealEstateSchema } from "../schemas";
import { realEstateRepository, addressRepository, categoryRepository } from "../repositories";
import { IReturnRealEstate, ICreateRealEstate, IAddressManual, IDeepCreateRealEstate } from "../interfaces";
import { AppError } from "../errors";


const create = async ({ address,...payload}: IDeepCreateRealEstate): Promise<IReturnRealEstate> => {
  console.log("chegou no services");
  const zipCode = address!.zipCode;
  const findAddress = await addressRepository.findOneBy({ zipCode })
  if(findAddress) throw new AppError("Address already exists", 409);

  const categoryId = +payload.categoryId;
  const findCategory = await categoryRepository.findOneBy({id: categoryId})
  if(!findCategory) throw new AppError("Category not found", 404);

      const newAddress: Address  = addressRepository.create(address)

      await addressRepository.save(newAddress)

      const resCreate: RealEstate = realEstateRepository.create({
        ...payload,
        address: newAddress
      });
    
    return returnRealEstateSchema.parse(resCreate);
  
};

export default { create }