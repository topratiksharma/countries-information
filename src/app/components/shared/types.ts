export interface CountryDetails {
  name: string;
  officialName: string;
  capital: string;
  flag: string;
  currency: Currency;
  languages: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Location {
  latlng: number[];
}
export interface DrivingInfo {
  side: string;
  signs: string[];
}
export interface Image {
  png: string;
  svg: string;
}
export interface IDD {
  root: string;
  suffixes: string[];
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Name {
  common: string;
  nativeName: any;
  official: string;
}
export interface PostalDetails {
  format: string;
  regex: string;
}

export interface Country {
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  capital: Array<string>;
  capitalInfo: Location;
  car: DrivingInfo;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: Image;
  continents: Array<string>;
  currencies: Array<any>;
  demonyms: any;
  fifa: string;
  flag: string;
  flags: Image;
  idd: IDD;
  independent: boolean;
  landlocked: boolean;
  languages: any;
  latlng: Array<number>;
  maps: Maps;
  name: Name;
  population: number;
  postalCode: PostalDetails;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: Array<string>;
  tld: Array<string>;
  translations: any;
  unMember: boolean;
}
