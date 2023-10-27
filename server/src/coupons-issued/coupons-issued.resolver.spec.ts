import { Test, TestingModule } from '@nestjs/testing'
import { CouponsIssuedResolver } from './coupons-issued.resolver'
import { CouponsIssuedService } from './coupons-issued.service'

describe('CouponsIssuedResolver', () => {
  let resolver: CouponsIssuedResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponsIssuedResolver, CouponsIssuedService]
    }).compile()

    resolver = module.get<CouponsIssuedResolver>(CouponsIssuedResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
