import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  ExpressAdapter,
  type NestExpressApplication
} from "@nestjs/platform-express";
import { graphqlUploadExpress } from "graphql-upload-ts";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

  app.enableCors({
    origin: '*',
  });

  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }))

  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
