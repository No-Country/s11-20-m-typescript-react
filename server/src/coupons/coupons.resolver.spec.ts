import { Test, TestingModule } from '@nestjs/testing';
import { CouponsResolver } from './coupons.resolver';
import { CouponsService } from './coupons.service';

describe('CouponsResolver', () => {
  let resolver: CouponsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponsResolver, CouponsService],
    }).compile();

    resolver = module.get<CouponsResolver>(CouponsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
