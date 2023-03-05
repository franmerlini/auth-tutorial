import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Roles } from 'src/enums';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles;
}
