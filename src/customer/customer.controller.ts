import {
    Controller, 
    Get, 
    Res, 
    HttpStatus, 
    Post, 
    Body, 
    Put, 
    Query, 
    NotFoundException, 
    Delete, 
    Param, ParseIntPipe 
  } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import { EditCustomerDTO } from './dto/edit-customer.dto';
@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    // add a customer
    @Post('/create')
    async addCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customerService.addCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            customer
        })
    }

    // Retrieve customers list
    @Get('customers')
    async getAllCustomer(@Res() res) {
        const customers = await this.customerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(customers);
    }

    // Fetch a particular customer using ID
    @Get('customer/:customerID')
    async getCustomer(@Res() res, @Param('customerID') customerID) {
        const customer = await this.customerService.getCustomer(customerID);
        if (!customer) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json(customer);
    }

    // Update a customer's details
    @Put('/edit')
    async editCustomer(@Res() res, @Body() createCustomerDTO: EditCustomerDTO) {

        const customer = await this.customerService.editCustomer(createCustomerDTO);
        
        //Debug
        console.log("Call Edit Customer " , createCustomerDTO);

        if (!customer) throw new NotFoundException('Customer does not exist!');
        
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been successfully updated',
            customer
        });
    }

    // Delete a customer
    @Delete('/delete')
    async deleteCustomer(@Res() res, @Query('customerID') customerID) {
        
        console.log("Call delete customer " , customerID);

        const customer = await this.customerService.deleteCustomer(customerID);

        if (!customer) throw new NotFoundException('Customer does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been deleted',
            customer
        })
    }

    @Get('cars')
    public async getCars(@Body('customerID', ParseIntPipe) customerID: number){
        return this.customerService.getCarsOfCustomer(customerID);
    }
}
