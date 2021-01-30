import { CreateAdForm } from 'components/ads/createAdForm';
import { Container } from '@material-ui/core';
import Layout from 'components/Layout/Layout';

export default function CreateAd() {
  return (
    <Layout>
      <Container>
        <CreateAdForm />
      </Container>
    </Layout>
  );
}
