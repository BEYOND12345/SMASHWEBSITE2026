import { IntegrationPage } from './integration-page';
import { integrationBySlug } from '../data/integrations-data';

export function IntegrationsXero() {
  return <IntegrationPage data={integrationBySlug['xero']} />;
}
