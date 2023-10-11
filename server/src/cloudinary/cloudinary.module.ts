import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryResolver } from './cloudinary.resolver';

@Module({
  providers: [CloudinaryProvider, CloudinaryService, CloudinaryResolver],
  exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule {}
