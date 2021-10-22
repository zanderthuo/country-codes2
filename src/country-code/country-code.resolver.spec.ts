import { Test, TestingModule } from '@nestjs/testing';
import { CountryCodeResolver } from './country-code.resolver';

describe('CountryCodeResolver', () => {
  let resolver: CountryCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryCodeResolver],
    }).compile();

    resolver = module.get<CountryCodeResolver>(CountryCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
