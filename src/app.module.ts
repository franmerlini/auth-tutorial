import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './core/config';
import { AuthModule, UsersModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./src/environments/.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig,
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
