import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import {
  InternalServerErrorException,
  UnauthorizedException
} from '@nestjs/common'
import { LoginResult, VerificationResult } from './entities/auth.entity'

@Resolver()
export class AuthResolver {
  constructor (private readonly authService: AuthService) {}

  @Mutation(() => LoginResult)
  async login (
  @Args('email') email: string,
    @Args('password') password: string
  ) {
    try {
      return await this.authService.login(email, password)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException('Login Error')
    }
  }

  @Query(() => VerificationResult)
  async verifyToken (@Args('token') token: string, @Context() context) {
    const verificationResult = await this.authService.verifyToken(token)
    return {
      sub: verificationResult.sub,
      username: verificationResult.username
    }
  }
}
