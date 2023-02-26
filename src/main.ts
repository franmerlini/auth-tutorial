import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // CONFIGURATIONS
  app.enableCors(CORS);
  app.setGlobalPrefix('api');

  // MIDLEWARES
  app.use(morgan('dev'));

  await app.listen(configService.get('PORT'));
}

bootstrap();
