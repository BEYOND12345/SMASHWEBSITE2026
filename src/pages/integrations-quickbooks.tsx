import { IntegrationPage } from './integration-page';
import { integrationBySlug } from '../data/integrations-data';

export function IntegrationsQuickBooks() {
  return <IntegrationPage data={integrationBySlug['quickbooks']} />;
}
