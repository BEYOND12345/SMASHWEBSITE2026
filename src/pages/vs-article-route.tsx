import { Navigate, useParams } from 'react-router-dom';
import { VsArticlePage } from '../components/vs-article-page';
import { vsPageBySlug } from '../data/vs-page-data';

export function VsArticleRoute() {
  const { competitor } = useParams<{ competitor: string }>();
  const slug = competitor ? `vs-${competitor}` : '';
  const data = vsPageBySlug[slug];

  if (!data) {
    return <Navigate to="/alternatives" replace />;
  }

  return <VsArticlePage data={data} />;
}
