import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;
}
