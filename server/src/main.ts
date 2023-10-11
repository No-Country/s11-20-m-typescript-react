<<<<<<< HEAD
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
=======
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9

  app.enableCors({
    origin: '*'
  })

<<<<<<< HEAD
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }))

  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
=======
  app.setGlobalPrefix('api/')
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001)
>>>>>>> ceeab4628e1f4b8721d63036be1d74673d1837a9
}
void bootstrap()
