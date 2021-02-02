import { AdsList } from 'components/ads/AdsList';
import Layout from 'components/Layout/Layout';
import Head from 'next/head';
export default function Motos() {
  return (
    <Layout>
      <Head>
        <title>Advertising App - Motos</title>
      </Head>
      <AdsList adSubCategoryID='066b9125-9d91-4020-8091-6e2c9835a3cb' />
    </Layout>
  );
}
