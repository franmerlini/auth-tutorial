import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers';
import { UserEntity, UserProjectsEntity } from './entities';
import { UserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserProjectsEntity])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, TypeOrmModule],
})
export class UsersModule {}
