import { CreateAdForm } from 'components/ads/CreateAdForm';
import { Container } from '@material-ui/core';
import Layout from 'components/Layout/Layout';
import { AdCategoriesList } from 'components/adsCategories/AdCategoriesList';

export default function Categories() {
  return (
    <Layout>
      <Container>
        <AdCategoriesList />
      </Container>
    </Layout>
  );
}
