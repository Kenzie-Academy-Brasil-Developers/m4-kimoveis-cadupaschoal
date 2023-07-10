import { z } from "zod";
import { scheduleSchema, createScheduleSchema } from "../schemas";

type ISchedule = z.infer<typeof scheduleSchema>;
type ICreateSchedule = z.infer<typeof createScheduleSchema>;

export { ISchedule, ICreateSchedule };
