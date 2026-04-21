import { CountryLanding } from './country-landing';
import { countryBySlug } from '../data/country-data';

export function CountryUS() {
  return <CountryLanding data={countryBySlug['us']} />;
}
