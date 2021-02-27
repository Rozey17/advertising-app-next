import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/Layout/Layout';
import styles from './Ads.module.css';

export default function Spectacles() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Annonces Spectacles</h2>
        </Typography>
      </div>

      <AdsList adSubCategoryID='f75bd577-74a6-4fe6-a8c4-7cc188e091d0' />
    </Layout>
  );
}
