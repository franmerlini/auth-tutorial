import { Roles } from 'src/enums';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
}
