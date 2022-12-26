import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from '../users/users.module';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategyService } from './services/local-strategy/local-strategy.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt/dist';
import { JWTConstants } from './models/constants';
import { JwtStrategyService } from './services/jwt-strategy/jwt-strategy.service';
import { CryptService } from './services/crypt/crypt.service';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: JWTConstants.secret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [AuthService, LocalStrategyService, JwtStrategyService, CryptService],
  controllers: [AuthController]
})
export class AuthModule {}
