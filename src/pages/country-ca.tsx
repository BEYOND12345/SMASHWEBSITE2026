import { CountryLanding } from './country-landing';
import { countryBySlug } from '../data/country-data';

export function CountryCA() {
  return <CountryLanding data={countryBySlug['ca']} />;
}
