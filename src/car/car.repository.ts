import { Repository, EntityRepository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDTO } from './dto/create-car.dto';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

    //Create new car
    public async createCar(
        createCartDto: CreateCarDTO,
      ): Promise<Car> {
        const { nameBrand, numModel } = createCartDto;
    
        const car = new Car();
        car.nameBrand = nameBrand;
        car.numModel = numModel;
    
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