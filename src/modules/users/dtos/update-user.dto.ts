import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { ROLES } from 'src/constants';
import { IUser } from '../interfaces';

export class UpdateUserDTO implements IUser {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;
}
