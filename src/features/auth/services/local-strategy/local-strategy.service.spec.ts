import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../../users/services/users.service';
import { AuthService } from '../auth/auth.service';
import { LocalStrategyService } from './local-strategy.service';

describe('LocalStrategyService', () => {
  let service: LocalStrategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalStrategyService, AuthService, UsersService, JwtService],
    }).compile();

    service = module.get<LocalStrategyService>(LocalStrategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
