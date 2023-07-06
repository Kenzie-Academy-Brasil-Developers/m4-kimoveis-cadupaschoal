import { z } from "zod";
import { sessionSchema } from "../schemas";

type ISessionCreate = z.infer<typeof sessionSchema>;
type ISessionReturn = { token: string };

export { ISessionCreate, ISessionReturn };