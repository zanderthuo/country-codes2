import { Test, TestingModule } from '@nestjs/testing';
import { CountryCodeService } from './country-code.service';

describe('CountryCodeService', () => {
  let service: CountryCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryCodeService],
    }).compile();

    service = module.get<CountryCodeService>(CountryCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
