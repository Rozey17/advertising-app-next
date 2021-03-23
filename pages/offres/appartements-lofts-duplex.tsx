import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';

export default function Appartment() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>
            Annonces Appartements, Lofts, Duplex
          </h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='dd563e29-77f8-4a73-a0d4-f5dcff9f3546' />
    </Layout>
  );
}
