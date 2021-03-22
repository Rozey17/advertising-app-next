import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/adsList';
import { Layout } from 'components/layout/layout';
import styles from './Ads.module.css';

export default function Spectacles() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Spectacles</h2>
        </Typography>
      </div>

      <AdsList adSubCategoryID='f75bd577-74a6-4fe6-a8c4-7cc188e091d0' />
    </Layout>
  );
}
