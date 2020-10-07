import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';

  import { CarService } from './car.service';
  import { CreateCarDTO } from './dto/create-car.dto';
  import { Car } from './car.entity';
  
  @Controller('car')
  export class CarController {
    constructor(private carService: CarService) {}
  
    @Post('create')
    public async createCar(
      @Body() createCarDto: CreateCarDTO,
    ): Promise<Car> {
      const car = await this.carService.createCar(createCarDto);
      return car;
    }
  
    @Get('all')
    public async getCars(): Promise<Car[]> {
      const cars = await this.carService.getCars();
      return cars;
    }
  
    @Get('/:carId')
    public async getCar(@Param('carId') carId: number) {
      const car = await this.carService.getCarByID(carId);
      return car;
    }
  
    @Patch('/edit/:carId')
    public async editCarByID(
      @Body() createCarDto: CreateCarDTO,
      @Param('carId') carId: number,
    ): Promise<Car> {
      const car = await this.carService.editCar(
        carId,
        createCarDto,
      );
      return car;
    }
  
    @Delete('/delete/:carId')
    public async deleteCarByID(@Param('carId') carId: number) {
      const deletedCar = await this.carService.deleteCarByID(carId);
      return deletedCar;
    }
  }
