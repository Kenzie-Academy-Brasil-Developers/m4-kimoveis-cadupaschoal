import { z } from "zod";
import { addressSchema, createAddress } from "../schemas";

type IAddress = z.infer<typeof addressSchema>;
type ICreateAddress = z.infer<typeof createAddress>;
type IAddressManual = {
    number: string;
    id: number;
    street: string;
    zipCode: string;
    city: string;
    state: string;
}
export { IAddress, ICreateAddress, IAddressManual }; 
