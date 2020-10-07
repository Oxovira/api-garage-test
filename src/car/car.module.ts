import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarRepository])], // add this
  controllers: [CarController],
  providers: [CarService],
})

export class CarModule {}
