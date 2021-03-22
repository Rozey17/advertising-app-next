import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/adsList';
import { Layout } from 'components/layout/layout';
import styles from './Ads.module.css';

export default function Bicycles() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Vélos</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='df4998d5-2baf-4f4c-9836-40a228356eb8' />
    </Layout>
  );
}
