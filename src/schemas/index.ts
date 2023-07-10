import {
  categorySchema,
  createCategorySchema,
  categoryRealEstateSchema,
} from "./category.schemas";
import {
  userSchema,
  userReadSchema,
  userReturnSchema,
  userUpdateSchema,
  userCreateSchema,
  userReturnUpdateSchema,
} from "./user.schema";

import {
  realEstateSchema,
  createRealEstateSchema,
  returnRealEstateSchema,
} from "./realEstate.schema";
import { sessionSchema } from "./session.schema";
import { addressSchema, createAddress } from "./address.schemas";
import { scheduleSchema, createScheduleSchema } from "./shedule.schemas";

export {
  userSchema,
  sessionSchema,
  addressSchema,
  createAddress,
  userReadSchema,
  categorySchema,
  scheduleSchema,
  userCreateSchema,
  userReturnSchema,
  userUpdateSchema,
  realEstateSchema,
  createCategorySchema,
  createScheduleSchema,
  createRealEstateSchema,
  returnRealEstateSchema,
  categoryRealEstateSchema,
  userReturnUpdateSchema,
};
