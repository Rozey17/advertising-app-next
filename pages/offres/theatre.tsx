import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/Layout/Layout';
import styles from './Ads.module.css';

export default function Theatre() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Annonces Théâtre</h2>
        </Typography>
      </div>

      <AdsList adSubCategoryID='caa4ec43-3040-4246-bf4c-798c5fcade0e' />
    </Layout>
  );
}
