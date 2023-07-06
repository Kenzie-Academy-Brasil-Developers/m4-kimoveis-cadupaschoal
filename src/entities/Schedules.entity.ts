import { User, RealEstate } from "./index";
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  Entity,
} from "typeorm";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (rs) => rs.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;
}
