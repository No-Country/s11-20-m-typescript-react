import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service'
import { comparePasswords } from 'src/utils/bcrypt.utils'
import { LoginResult } from './entities/auth.entity'

@Injectable()
export class AuthService {
  constructor (
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) {}

  async login (email: string, password: string): Promise<LoginResult> {
    const user = await this.usersService.findUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException('Incorrect email address')
    }

    const isPasswordValid = await comparePasswords(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect password')
    }

    const payload = { sub: user._id, username: user.username }
    const token = this.jwtService.sign(payload)
    return {
      token,
      userId: user._id.toString()
    }
  }

  async verifyToken (token: string) {
    try {
      const payload = this.jwtService.verify(token)
      return payload
    } catch (error) {
      throw new UnauthorizedException('Token inválido')
    }
  }
}
