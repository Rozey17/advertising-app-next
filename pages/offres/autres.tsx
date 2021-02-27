import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/Layout/Layout';
import styles from './Ads.module.css';
import { Typography } from '@material-ui/core';

export default function Others() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Autres Annonces</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='3c181f77-3b7e-4c0f-b28a-1e70998afb5f' />
    </Layout>
  );
}
