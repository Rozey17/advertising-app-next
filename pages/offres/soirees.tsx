import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/adsList';
import { Layout } from 'components/layout/layout';
import styles from './Ads.module.css';

export default function Parties() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Soirées</h2>
        </Typography>
      </div>

      <AdsList adSubCategoryID='77dd219b-fe80-4a4a-82bf-df1782e2bff1' />
    </Layout>
  );
}
