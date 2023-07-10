import { Schedule } from "../entities";
import {
  scheduleRepository,
  realEstateRepository,
  userRepository,
} from "../repositories";
import { ISchedule, ICreateSchedule } from "../interfaces";
import { scheduleSchema, createScheduleSchema } from "../schemas";
import { AppError } from "../errors";

const create = async (
  payload: ICreateSchedule,
  userId: string
): Promise<Schedule> => {
  const body = { ...payload, userId };
  const { date, hour, realEstateId } = payload;
  const userSchedules = await scheduleRepository
    .createQueryBuilder()
    .where("userId = :userId AND hour = :hour AND date = :date", {
      userId,
      hour,
      date,
    })
    .getMany();
  if (userSchedules.length !== 0)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  const propetySchemas = await scheduleRepository
    .createQueryBuilder()
    .where("realEstateId = :realEstateId AND hour = :hour AND date = :date", {
      realEstateId,
      hour,
      date,
    })
    .getMany();

  if (propetySchemas.length !== 0)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  const newSchedule = scheduleRepository.create(body);
  await scheduleRepository.save(newSchedule);

  return newSchedule;
};

const retrieve = async (realEstateId: number) => {
  const schedulesBody = await scheduleRepository
    .createQueryBuilder("sr")
    .innerJoinAndSelect("sr.realEstate", "re")
    .innerJoinAndSelect("sr.user", "u")
    .innerJoinAndSelect("re.address", "a")
    .innerJoinAndSelect("re.category", "c")
    .where("sr.realEstateId = :realEstateId", { realEstateId })
    .getMany();

  const createdAt = schedulesBody[0].realEstate.createdAt;
  const id1 = schedulesBody[0].id;
  const id2 = schedulesBody[1].id;
  const address = schedulesBody[0].realEstate.address;
  const category = schedulesBody[0].realEstate.category;
  const schedulesDate1 = schedulesBody[0].date;
  const schedulesHour1 = schedulesBody[0].hour;
  const schedulesDate2 = schedulesBody[1].date;
  const schedulesHour2 = schedulesBody[1].hour;
  const size = schedulesBody[0].realEstate.size;
  const sold = schedulesBody[0].realEstate.sold;
  const updatedAt = schedulesBody[0].realEstate.updatedAt;
  const value = schedulesBody[0].realEstate.value;
  const user1 = schedulesBody[0].user;
  const user2 = schedulesBody[1].user;
  const response = {
    address,
    category,
    createdAt,
    id: address.id,
    schedules: [
      {
        date: schedulesDate1,
        hour: schedulesHour1,
        id: id1,
        user: user1,
      },
      {
        date: schedulesDate2,
        hour: schedulesHour2,
        id: id2,
        user: user2,
      },
    ],
    size,
    sold,
    updatedAt,
    value,
  };
  return response;
};

export default { create, retrieve };
