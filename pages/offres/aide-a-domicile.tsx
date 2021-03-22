import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/adsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';

export default function HomeCare() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Aide à domicile</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='2bb4497b-52d9-4fd6-a644-c434e7c03f9a' />
    </Layout>
  );
}
