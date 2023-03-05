import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthDTO } from '../dtos';
import { AuthService } from '../services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() payload: AuthDTO): Promise<string> {
    try {
      const user = await this.authService.validateUser(payload.username, payload.email, payload.password);

      if (!user) {
        throw new UnauthorizedException('Credenciales incorrectas.');
      }

      return await this.authService.generateJWT(user);
    } catch (error) {
      throw error;
    }
  }
}
