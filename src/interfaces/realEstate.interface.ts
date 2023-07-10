import { z } from "zod";
import { RealEstate as ERealEstate } from "../entities";
import { DeepPartial } from "typeorm";
import {
  realEstateSchema,
  createRealEstateSchema,
  returnRealEstateSchema,
} from "../schemas";

type IRealEstate = z.infer<typeof realEstateSchema>;
type ICreateRealEstate = z.infer<typeof createRealEstateSchema>;
type IReturnRealEstate = z.infer<typeof returnRealEstateSchema>;
type IDeepCreateRealEstate = {
  value: string | number;
  size: number;
  categoryId: number;
  address: {
    number: string;
    street: string;
    zipCode: string;
    city: string;
    state: string;
  };
};

export {
  IRealEstate,
  ICreateRealEstate,
  IReturnRealEstate,
  IDeepCreateRealEstate,
};
