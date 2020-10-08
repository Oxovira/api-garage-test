import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import { EditCustomerDTO } from './dto/edit-customer.dto';
import { CustomerRepository } from './customer.repository';
import { promises } from 'dns';
import { Car } from '../car/car.entity';

@Injectable()
export class CustomerService {
    
    constructor(@InjectRepository(CustomerRepository) 
    private readonly customerRepository: CustomerRepository,)  {}
    
    // fetch all customers
    async getAllCustomer(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    // Get a single customer
    async getCustomer(customerID: number): Promise<Customer> {
        const foundCar = await this.customerRepository.findOne(customerID);
        if (!foundCar) 
        {
          throw new NotFoundException('Car not found');
        }
        return foundCar;
    }

    // post a single customer
    async addCustomer(createCustomerDTO: CreateCustomerDTO
        ): Promise<Customer> {
            return await this.customerRepository.createCustomer(createCustomerDTO);
    }


    // Edit customer details
    async editCustomer(
        editCustomerDTO: EditCustomerDTO
        ): Promise<Customer> {
        const editedCustomer = await this.customerRepository.findOne(editCustomerDTO.id);
        if (!editedCustomer) 
        {
          throw new NotFoundException('Customer not found');
        }
        return this.customerRepository.editCustomer(editCustomerDTO, editedCustomer);
    }
    
    // Delete a customer
    async deleteCustomer(customerID): Promise<any> {
        await this.customerRepository.delete(customerID);
    }

    async getCarsOfCustomer(customerID: number): Promise<Car[]>
    {
        console.log(typeof(customerID));
        const customer: Customer = await Customer.findOne({where: {id: customerID}, relations: ['cars']});
        return customer.cars;
    }
}