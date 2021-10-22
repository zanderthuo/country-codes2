import { ObjectType, Field, InputType, registerEnumType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import *  as mongoose from "mongoose";


export enum developedOrDevelopingCountries {
	
}

export enum Names {
	ISO3166_1_Alpha_3 = "ISO3166-1-Alpha-3",
	ISO3166_1_numeric = "ISO3166-1-numeric",
	ISO3166_1_Alpha_2 = "ISO3166-1-Alpha-2",
	UNTERM_Spanish_Formal = "UNTERM Spanish Formal",
	Global_Code = "Global Code",
	Intermediate_Region_Code = "Intermediate Region Code",
	UNTERM_French_Short = "UNTERM French Short",
	ISO4217_currency_name = "ISO4217-currency_name",
	UNTERM_Russian_Formal = "UNTERM Russian Formal",
	UNTERM_English_Short = "UNTERM English Short",
	ISO4217_currency_alphabetic_code = "ISO4217-currency_alphabetic_code",
	Small_Island_Developing_States = "Small Island Developing States (SIDS)",
	UNTERM_Spanish_Short = "UNTERM Spanish Short",
	ISO4217_currency_numeric_code = "ISO4217-currency_numeric_code",
	UNTERM_Chinese_Formal = "UNTERM Chinese Formal",
	UNTERM_French_Formal = "UNTERM French Formal",
	UNTERM_Russian_Short = "UNTERM Russian Short",
	Sub_region_Code = "Sub-region Code",
	Region_Code = "Region Code",
	ISO4217_currency_minor_unit = "ISO4217-currency_minor_unit",
	UNTERM_Arabic_Formal = "UNTERM Arabic Formal",
	UNTERM_Chinese_Short = "UNTERM Chinese Short",
	Land_Locked_Developing_Countries = "Land Locked Developing Countries (LLDC)",
	Intermediate_Region_Name = "Intermediate Region Name",
	UNTERM_English_Formal = "UNTERM English Formal",
	ISO4217_currency_country_name = "ISO4217-currency_country_name",
	Least_Developed_Countries = "Least Developed Countries (LDC)",
	UNTERM_Arabic_Short = "UNTERM Arabic Short",
	Sub_region_Name = "Sub-region Name",
	Global_Name = "Global Name",
	Geoname_ID = "Geoname ID",
	CLDR_display_name = "CLDR display name",
	DEVELOPED = "Developed",
	DEVELOPING = "Developing",
}

registerEnumType(Names, {
  name: 'Names',
});

export type CountryCodeDocument = CountryCode & mongoose.Document;

@Schema()
@ObjectType()
export class CountryCode {

	@Field()
	@Prop()
	FIFA: string;

	@Field()
	@Prop()
	Dial: string;

	@Field(type => Names)
	@Prop({ unique: true, nullable: true })
	ISO3166_1_Alpha_3: string;

	@Field()
	@Prop()
	MARC: string;

	@Field()
	@Prop()
	is_independent: string;

	@Field( type => Names )
	@Prop()
	ISO3166_1_numeric: string;

	@Field()
	@Prop()
	GAUL: string;

	@Field()
	@Prop()
	FIPS: string;

	@Field()
	@Prop()
	WMO: string;

	@Field(type => Names)
	@Prop()
	ISO3166_1_Alpha_2: string;

	@Field()
	@Prop()
	ITU: string;

	@Field()
	@Prop()
	IOC: string;

	@Field()
	@Prop()
	DS: string;

	@Field(type => Names)
	@Prop()
	UNTERM_Spanish_Formal: string;

	@Field( type => Names )
	@Prop()
	Global_Code: string;

	@Field(type => Names)
	@Prop()
	Intermediate_Region_Code: string;

	@Field()
	@Prop()
	official_name_fr: string;

	@Field( type => Names)
	@Prop()
	UNTERM_French_Short: string;

	@Field( type => Names)
	@Prop()
	ISO4217_currency_name: string;

	@Field(type => Names)
	@Prop()
	Developed_Developing_Countries: string;

	@Field( type => Names )
	@Prop()
	UNTERM_Russian_Formal: string;

	@Field( type => Names)
	@Prop()
	UNTERM_English_Short: string;

	@Field( type => Names )
	@Prop()
	ISO4217_currency_alphabetic_code: string;

	@Field(type => Names)
	@Prop()
	Small_Island_Developing_States: string;

	@Field( type => Names )
	@Prop()
	UNTERM_Spanish_Short: string;

	@Field(type => Names)
	@Prop()
	ISO4217_currency_numeric_code: string;

	@Field( type => Names)
	@Prop()
	UNTERM_Chinese_Formal: string;

	@Field( type => Names)
	@Prop()
	UNTERM_French_Formal: string;

	@Field( type => Names)
	@Prop()
	UNTERM_Russian_Short: string;

	@Field()
	@Prop()
	M49: number;

	@Field( type => Names )
	@Prop()
	Sub_region_Code: string;

	@Field( type => Names )
	@Prop()
	Region_Code: string;

	@Field()
	@Prop()
	official_name_ar: string;

	@Field( type => Names)
	@Prop()
	ISO4217_currency_minor_unit: string;

	@Field( type => Names)
	@Prop()
	UNTERM_Arabic_Formal: string;

	@Field( type => Names)
	@Prop()
	UNTERM_Chinese_Short: string;

	@Field( type => Names)
	@Prop()
	Land_Locked_Developing_Countries: string;

	@Field( type => Names)
	@Prop()
	Intermediate_Region_Name: string;

	@Field()
	@Prop()
	official_name_es: string;

	@Field( type => Names)
	@Prop()
	UNTERM_English_Formal: string;

	@Field()
	@Prop()
	official_name_cn: string;

	@Field()
	@Prop()
	official_name_en: string;

	@Field( type => Names)
	@Prop()
	ISO4217_currency_country_name: string;

	@Field( type => Names)
	@Prop()
	Least_Developed_Countries: string;

	@Field()
	@Prop()
	Region_Name: string;

	@Field( type => Names)
	@Prop()
	UNTERM_Arabic_Short: string;

	@Field( type => Names)
	@Prop()
	Sub_region_Name: string;

	@Field()
	@Prop()
	official_name_ru: string;

	@Field( type => Names)
	@Prop()
	Global_Name: string;

	@Field()
	@Prop()
	Capital: string;

	@Field()
	@Prop()
	Continent: string;

	@Field()
	@Prop()
	TLD: string;

	@Field()
	@Prop()
	Languages: string;

	@Field( type => Names )
	@Prop({ unique: true })
	Geoname_ID: number;

	@Field(type => Names)
	@Prop()
	CLDR_display_name: string

	@Field()
	@Prop()
	EDGAR: string;

}

export const CountryCodeSchema = SchemaFactory.createForClass(CountryCode);

@InputType()
export class FindCountryCodeInput {
	@Field()
	id: string;
}