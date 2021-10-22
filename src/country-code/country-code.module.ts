import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryCodeResolver } from './country-code.resolver';
import { CountryCodeService } from './country-code.service';
import { CountryCode, CountryCodeSchema } from './country-code.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CountryCode.name, schema: CountryCodeSchema}
    ])
  ],
  providers: [CountryCodeResolver, CountryCodeService]
})
export class CountryCodeModule {}
