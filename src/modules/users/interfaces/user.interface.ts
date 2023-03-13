import { ROLES } from 'src/core/constants';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: ROLES;
}
