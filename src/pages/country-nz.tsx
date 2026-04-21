import { CountryLanding } from './country-landing';
import { countryBySlug } from '../data/country-data';

export function CountryNZ() {
  return <CountryLanding data={countryBySlug['nz']} />;
}
