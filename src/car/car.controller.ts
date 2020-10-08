import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
    Res,
    Query,
    NotFoundException,
    HttpStatus,
  } from '@nestjs/common';

  import { CarService } from './car.service';
  import { CreateCarDTO } from './dto/create-car.dto';
  import { Car } from './car.entity';
  
  @Controller('car')
  export class CarController {
    constructor(private carService: CarService) {}
  
    @Post('/create')
    async createCar(@Res() res, @Body() createCarDto: CreateCarDTO){
      console.log("Create Cars for Customer ", createCarDto);
      
      const car = await this.carService.createCar(createCarDto);
      return res.status(HttpStatus.OK).json({
        message: "Car has been created successfully",
        car
      })
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
  
    @Delete('/delete')
    async deleteCarByID(@Res() res,  @Query('carID') carID) {
      
      console.log("Call delete customer " , carID);
      const car = await this.carService.deleteCarByID(carID);

      if(!car) throw new NotFoundException('Car does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Car has been deleted',
            car
      })
    }

 
  }
