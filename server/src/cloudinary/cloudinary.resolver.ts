import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GraphQLUpload, type FileUpload } from 'graphql-upload-ts';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryResult } from './cloudinary.types';

@Resolver()
export class CloudinaryResolver {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Mutation(() => String)
  async uploadTestImage(
    @Args({ name: 'image', type: () => GraphQLUpload })
    image: FileUpload,
  ): Promise<CloudinaryResult> {
    const imageUpload = await this.cloudinaryService.uploadImage(image, 80);
    return imageUpload.secure_url;
  }
}
