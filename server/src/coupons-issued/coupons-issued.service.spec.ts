import { Test, TestingModule } from '@nestjs/testing';
import { CouponsIssuedService } from './coupons-issued.service';

describe('CouponsIssuedService', () => {
  let service: CouponsIssuedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponsIssuedService],
    }).compile();

    service = module.get<CouponsIssuedService>(CouponsIssuedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
