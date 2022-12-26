import { Test, TestingModule } from '@nestjs/testing';
import { CryptService } from './crypt.service';

describe('CryptService', () => {
  let service: CryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptService],
    }).compile();

    service = module.get<CryptService>(CryptService);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return true when provided test is equal to encrypted text', async () => {
    const data = 'test';

    const response = await service.encrypt(data);

    const result = await service.match(data, response);

    expect(result).toBeTruthy();
  });

  it('Should return false when provided test is not equal to encrypted text', async () => {
    const data = 'test';

    const response = await service.encrypt(data);

    const result = await service.match('test1', response);

    expect(result).toBeFalsy();
  });
});
