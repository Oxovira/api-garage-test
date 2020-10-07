import { IsString } from 'class-validator';

export class CreateCarDTO {
    
  @IsString()
  nameBrand: string;

  @IsString()
  numModel: string;
}