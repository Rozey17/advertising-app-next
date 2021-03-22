import { AdsList } from 'components/ads/adsList';
import styles from './Ads.module.css';
import { Typography } from '@material-ui/core';
import { Layout } from 'components/layout/Layout';

export default function Cars() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Voitures</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='8b50b839-afe0-41c9-807c-eeff6b9ca709' />
    </Layout>
  );
}
