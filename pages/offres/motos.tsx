import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/adsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';
export default function Motos() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Motos</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='066b9125-9d91-4020-8091-6e2c9835a3cb' />
    </Layout>
  );
}
