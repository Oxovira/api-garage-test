import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Car } from './car.entity';
import { CreateCarDTO } from './dto/create-car.dto';
import { CarRepository } from './car.repository';


@Injectable()
export class CarService {

    constructor(
        @InjectRepository(CarRepository)
        private carRepository: CarRepository,
      ) {}

    //Create Car
    public async createCar(
      createCarDto: CreateCarDTO,
    ): Promise<Car> {
        return await this.carRepository.createCar(createCarDto);
    }

    //Get All Cars (Change by List Table or Repository for get other Table SQL with id == user.id)
    public async getCars(): Promise<Car[]> {
        return await this.carRepository.find();
    }

    public async getCarByID(carId: number): Promise<Car> {
        const foundCar = await this.carRepository.findOne(carId);
        if (!foundCar) 
        {
          throw new NotFoundException('Car not found');
        }
        return foundCar;
    }

    //Put car
    public async editCar(
        carId: number,
        createCarDto: CreateCarDTO,
      ): Promise<Car> {
        const editedCar = await this.carRepository.findOne(carId);
        if (!editedCar) 
        {
          throw new NotFoundException('Car not found');
        }
        return this.carRepository.editCar(createCarDto, editedCar);
    }

    //Deleted by ID
    public async deleteCarByID(carId: number): Promise<void> {
        await this.carRepository.delete(carId);
    }

}
