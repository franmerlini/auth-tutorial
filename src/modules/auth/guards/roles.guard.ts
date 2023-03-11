import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { DECORATORS_KEYS, ROLES } from 'src/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<ROLES[]>(ROLES, context.getHandler());
    const admin = this.reflector.get<string>(DECORATORS_KEYS.ADMIN, context.getHandler());
    const req = context.switchToHttp().getRequest<Request>();

    if ((roles && roles.every((role) => role !== req.userRole)) || (admin && req.userRole !== admin)) {
      throw new ForbiddenException('No tiene permisos para acceder a este recurso.');
    }

    return true;
  }
}
