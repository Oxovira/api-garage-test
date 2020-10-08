import { IsString } from 'class-validator';

export class EditCustomerDTO {
    
    @IsString()
    id: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}