import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from '../users/users.module';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategyService } from './services/local-strategy/local-strategy.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategyService } from './services/jwt-strategy/jwt-strategy.service';
import { CommonModule } from '../common/common.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    CommonModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('SECRET_KEY'),
        signOptions: { expiresIn: '1d' }
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategyService, JwtStrategyService],
  controllers: [AuthController]
})
export class AuthModule {}


