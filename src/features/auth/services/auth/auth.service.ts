import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../../users/services/users.service';
import { CryptService } from '../../../common/services/crypt/crypt.service';
import { User } from '../../../../schemas/User';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private cryptService: CryptService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if(!user) return null;
    
    const passwordIsCorrect = await this.cryptService.match(pass, user.password)

    if (!passwordIsCorrect) return null;

    const { password, ...result } = user;

    return result;
  }

  async login(user: User) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
