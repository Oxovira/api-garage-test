import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Car extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameBrand: string;

  @Column()
  numModel: string;

}