import { Roles } from 'src/enums';

export interface TokenData {
  sub: string;
  role: Roles;
}
