import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    try {
      const token = await this.authService.login(email, password);
      return token;
    } catch (error) {
        throw new InternalServerErrorException('Login Error: ' + error.message);
    }
  }
}


