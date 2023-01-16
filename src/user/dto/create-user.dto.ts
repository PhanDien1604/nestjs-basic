import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: String;

  @IsNotEmpty()
  age: Number;
}
