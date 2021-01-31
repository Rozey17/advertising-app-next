import { Container } from '@material-ui/core';
import Layout from 'components/Layout/Layout';
import { CreateAdCategoryForm } from 'components/adsCategories/createAdCategoryForm';

export default function CreateAdCategory() {
  return (
    <Layout>
      <Container>
        <CreateAdCategoryForm />
      </Container>
    </Layout>
  );
}
