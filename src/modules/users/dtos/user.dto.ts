import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Roles } from 'src/enums';
import { IUser } from '../interfaces';

export class UserDTO implements IUser {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles;
}
