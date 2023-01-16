import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  name: String;

  @IsNotEmpty()
  @IsNumber()
  age: Number;
}
