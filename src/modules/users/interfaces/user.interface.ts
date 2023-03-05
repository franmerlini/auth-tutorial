import { Roles } from 'src/enums';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: Roles;
}
