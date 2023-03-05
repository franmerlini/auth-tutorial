import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from 'src/modules/users/entities';
import { UserService } from 'src/modules/users/services';
import { TokenData } from '../interfaces';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public async validateUser(username: string, email: string, password: string): Promise<UserEntity> {
    const userByEmail = await this.userService.findByKey('email', email);
    const userByUsername = await this.userService.findByKey('username', username);

    if (userByUsername && (await bcrypt.compare(password, userByUsername.password))) {
      return userByUsername;
    }

    if (userByEmail && (await bcrypt.compare(password, userByEmail.password))) {
      return userByEmail;
    }

    return null;
  }

  public async signJWT(payload: TokenData): Promise<string> {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  }

  public async generateJWT(payload: UserEntity): Promise<string> {
    const user = await this.userService.getUserById(payload.id);

    return this.signJWT({
      userRole: user.role,
      userId: user.id,
    });
  }
}
