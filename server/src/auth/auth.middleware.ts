import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor (private readonly authService: AuthService) {}

  async use (req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization

    if (!token) {
      res.status(401).json({ message: 'Authentication token not provided' })
      return
    }

    try {
      const payload = await this.authService.verifyToken(token)
      res.locals.user = payload
      next()
    } catch (error) {
      res.status(401).json({ message: 'Invalid Token' })
    }
  }
}
