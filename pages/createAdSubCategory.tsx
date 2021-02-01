import { CreateAdForm } from 'components/ads/CreateAdForm';
import { Container } from '@material-ui/core';
import Layout from 'components/Layout/Layout';
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
