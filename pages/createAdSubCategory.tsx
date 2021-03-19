import { CreateAdForm } from 'components/ads/CreateAdForm';
import { Container } from '@material-ui/core';
import { Layout } from 'components/layout/Layout';
import { CreateAdSubCategoryForm } from 'components/adSubcategories/CreateAdSubCategoryForm';

export default function CreateAdSubCategory() {
  return (
    <Layout>
      <Container>
        <CreateAdSubCategoryForm />
      </Container>
    </Layout>
  );
}
