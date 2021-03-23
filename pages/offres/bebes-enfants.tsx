import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';

export default function Enfants() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Bébés, Enfants</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='a7d1295c-19d7-4216-a826-9affe9bb55d5' />
    </Layout>
  );
}
