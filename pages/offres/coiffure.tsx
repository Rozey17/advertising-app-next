import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';

export default function Haircuts() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2>Annonces Coiffure</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='1cf29a07-e00b-4111-a50b-2669b2503440' />
    </Layout>
  );
}
