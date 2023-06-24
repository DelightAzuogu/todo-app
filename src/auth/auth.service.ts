import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor() {}

  public users: AuthDto[];

  async signup(dto: AuthDto) {
    console.log(this.users);
    this.users.push(dto);
    return { msg: 'created' };
  }

  async signin(dto: AuthDto) {
    const isInclude = this.users.includes(dto);
    if (isInclude) {
      return { msg: 'logged in ' };
    } else {
      return { msg: 'is not logged in' };
    }
  }
}
