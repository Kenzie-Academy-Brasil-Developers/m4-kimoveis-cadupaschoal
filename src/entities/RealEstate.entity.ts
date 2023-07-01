import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  BeforeInsert,
} from "typeorm";
import { Address, Category } from "./index";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address, (a) => a.id)
  addressId: number;

  @ManyToOne(() => Category, (c) => c.id)
  categoryId: number;

  @BeforeInsert()
  changeToNumber() {
    this.value = Number(this.value);
    this.size = Number(this.size);
  }
}
