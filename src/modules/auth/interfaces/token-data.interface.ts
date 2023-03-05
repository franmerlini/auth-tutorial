import { Roles } from 'src/enums';

export interface TokenData {
  userId: string;
  userRole: Roles;
  iat?: number;
  exp?: number;
}
