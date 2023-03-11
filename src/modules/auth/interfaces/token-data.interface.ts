import { ROLES } from 'src/constants';

export interface TokenData {
  userId: string;
  userRole: ROLES;
  iat?: number;
  exp?: number;
}
