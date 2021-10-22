import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryCode, CountryCodeDocument } from './country-code.entity';

@Injectable()
export class CountryCodeService {
  countryCodes: Partial<CountryCode>[];
  constructor(@InjectModel(CountryCode.name) private countryCodeModel: Model<CountryCodeDocument>){
    this.countryCodes = this.countryCodes; 
  }

  async findAll(){
    return this.countryCodeModel.find().lean();
  }

  async findById(id){
    return this.countryCodeModel.findById(id).lean()
  }

  async findByName(){}

}
