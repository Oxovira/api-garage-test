import { Repository, EntityRepository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import { EditCustomerDTO } from './dto/edit-customer.dto';
@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

    //Create new customer
    public async createCustomer(
        createCustomerDto: CreateCustomerDTO,
      ): Promise<Customer> {
        const { firstName, lastName } = createCustomerDto;
    
        const customer = new Customer();
        customer.firstName = firstName;
        customer.lastName = lastName;
    
        await customer.save();
        return customer;
      }
    
    //Edit customer
      public async editCustomer(
        editCustomerDTO: EditCustomerDTO,
        editedCustomer: Customer,
      ): Promise<Customer> {
        const { firstName, lastName } = editCustomerDTO;
    
        editedCustomer.firstName = firstName;
        editedCustomer.lastName = lastName;
        await editedCustomer.save();
    
        return editedCustomer;
      }
    }