import { Global, Module } from '@nestjs/common';
import { UserService } from '../users/services';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Global()
@Module({
  imports: [UsersModule],
  providers: [AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
