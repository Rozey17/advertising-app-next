import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';

export default function Electronics() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Annonces Electroménager</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='9b3c82f9-1969-4001-90d9-e4aca828725a' />
    </Layout>
  );
}
