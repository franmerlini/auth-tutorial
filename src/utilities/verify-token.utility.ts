import * as jwt from 'jsonwebtoken';
import { TokenData } from 'src/modules/auth/interfaces';

export const verifyToken = (token: string): TokenData => {
  const decode = jwt.decode(token) as TokenData;
  const currentDate = new Date().getTime() / 1000;

  if (currentDate > decode.exp) {
    return null;
  }

  return decode;
};
