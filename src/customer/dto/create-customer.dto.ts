import { IsString } from 'class-validator';

export class CreateCustomerDTO {
    
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  readonly carIDs: number[];
}