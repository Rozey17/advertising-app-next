import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/Layout/Layout';
import styles from './Ads.module.css';

export default function Expositions() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Annonces Exposition, Salons</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='4cc9fa3e-adb3-4e89-8a48-d3a6c3f4a2f9' />
    </Layout>
  );
}
