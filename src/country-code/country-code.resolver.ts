import { Args, Query, Resolver } from '@nestjs/graphql';
import { CountryCode, FindCountryCodeInput } from './country-code.entity';
import { CountryCodeService } from './country-code.service';

@Resolver(() => CountryCode)
export class CountryCodeResolver {
  constructor(
    private countryCodeService: CountryCodeService,
  ){}

  @Query(() => [CountryCode]) // what will the query return
  async countryCodes (){
    return this.countryCodeService.findAll(); // Resolve the query
  }

  @Query(() => CountryCode)
  async countryCode(@Args('input') { id }: FindCountryCodeInput) {
    return this.countryCodeService.findById(id);
  }
}
