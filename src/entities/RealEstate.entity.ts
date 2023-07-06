import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  BeforeInsert,
  JoinColumn,
  AfterInsert,
  OneToMany,
} from "typeorm";
import { Address, Category, Schedule } from "./index";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address, (a) => a.real_estate)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (c) => c.real_estate)
  category: Category;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Schedule[];
  
  @BeforeInsert()
  changeToNumber() {
    this.value = (+this.value);
    this.size = (+this.size);
  }
}
