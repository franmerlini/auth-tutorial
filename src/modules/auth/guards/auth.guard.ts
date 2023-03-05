import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { PUBLIC_KEY } from 'src/constants';
import { UserService } from 'src/modules/users/services';
import { verifyToken } from 'src/utilities';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService, private readonly reflector: Reflector) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(PUBLIC_KEY, context.getHandler());

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest<Request>();
    const token = req.headers['auth-token'];

    if (!token || Array.isArray(token)) {
      throw new UnauthorizedException('Token inválido.');
    }

    const validToken = verifyToken(token);

    if (!validToken) {
      throw new UnauthorizedException('Token expirado.');
    }

    const user = await this.userService.getUserById(validToken.userId);

    if (!user) {
      throw new UnauthorizedException('Usuario inválido.');
    }

    req.userId = user.id;
    req.userRole = user.role;

    return true;
  }
}
