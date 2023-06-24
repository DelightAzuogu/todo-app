import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsAlpha()
  @IsNotEmpty()
  password: string;
}
