import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/core/types/express';
import { UserService } from 'src/modules/users/services';
import { TokenData } from '../interfaces';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  public async validateUser(username: string, password: string): Promise<TokenData> {
    const user = await this.userService.findByKey('username', username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { id, role } = user;
      return { id, role };
    }

    return null;
  }

  public async login(user: User): Promise<string> {
    const { id, role } = user;

    return this.jwtService.sign({ id, role });
  }
}
