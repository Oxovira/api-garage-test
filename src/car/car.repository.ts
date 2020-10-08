import { Repository, EntityRepository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDTO } from './dto/create-car.dto';
import { Customer } from '../customer/customer.entity';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

    //Create new car
    public async createCar(
        createCartDto: CreateCarDTO,
      ): Promise<Car> {
        const { nameBrand, numModel, customerIDs } = createCartDto;
        const car = new Car();
        
        car.nameBrand = nameBrand;
        car.numModel = numModel;
        car.customers=[];
        
        //Création de la liason du la voiture avec un utilisateur
        console.log(customerIDs);
        for(let i = 0; i < customerIDs.length ; i++)
        {
          const customer = await Customer.findOne(customerIDs[i]);
          car.customers.push(customer);
        }
        await car.save();
        return car;
      }
    
    //Edit car
      public async editCar(
        createCartDto: CreateCarDTO,
        editedCar: Car,
      ): Promise<Car> {
        const { nameBrand, numModel } = createCartDto;
    
        editedCar.nameBrand = nameBrand;
        editedCar.numModel = numModel;
        await editedCar.save();
    
        return editedCar;
      }
    }