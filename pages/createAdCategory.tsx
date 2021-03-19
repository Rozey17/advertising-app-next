import { Container } from '@material-ui/core';
import { Layout } from 'components/layout/Layout';
import { CreateAdCategoryForm } from 'components/adsCategories/CreateAdCategoryForm';

export default function CreateAdCategory() {
  return (
    <Layout>
      <Container>
        <CreateAdCategoryForm />
      </Container>
    </Layout>
  );
}
