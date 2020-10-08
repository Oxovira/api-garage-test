import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToMany, JoinTable } from 'typeorm';
import { Car } from '../car/car.entity';

@Entity()
export class Customer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  //Relation beetween table Many To Many
  @ManyToMany(type => Car)
  @JoinTable()
  cars: Car[];

}