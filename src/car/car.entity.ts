import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToMany } from 'typeorm';
import { Customer } from '../customer/customer.entity';
@Entity()
export class Car extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameBrand: string;

  @Column()
  numModel: string;

  @ManyToMany( type => Customer)
  customers: Customer[];

}