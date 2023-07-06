import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { RealEstate } from "./RealEstate.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (rs) => rs.category)
  real_estate: RealEstate[];
}
