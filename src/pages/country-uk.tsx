import { CountryLanding } from './country-landing';
import { countryBySlug } from '../data/country-data';

export function CountryUK() {
  return <CountryLanding data={countryBySlug['uk']} />;
}
