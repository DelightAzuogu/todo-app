import { Body, Controller, Post } from '@nestjs/common';
import { validate } from 'class-validator';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authServce: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authServce.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authServce.signin(dto);
  }
}
