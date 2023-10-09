import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { InternalServerErrorException } from '@nestjs/common';
import { VerificationResult } from 'src/users/entities/user.entity';

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

  @Query(() => VerificationResult)
  async verifyToken(@Args('token') token: string) {
    const verificationResult = await this.authService.verifyToken(token);
    return {
      sub: verificationResult.sub,
      username: verificationResult.username,
    };
  }
}


