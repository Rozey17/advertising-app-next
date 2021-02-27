import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/Layout/Layout';
import styles from './Ads.module.css';

export default function Security() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Annonces Sécurité, Gardiennage</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='16e42e27-af3f-4415-9e67-9ad06115dc6b' />
    </Layout>
  );
}
