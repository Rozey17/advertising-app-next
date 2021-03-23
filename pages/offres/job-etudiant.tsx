import { Typography } from '@material-ui/core';
import { AdsList } from 'components/ads/AdsList';
import { Layout } from 'components/layout/Layout';
import styles from './Ads.module.css';

export default function JobForStudent() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Jobs Etudiants</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='438b4f60-9b26-45af-b4e1-5a129c253d90' />
    </Layout>
  );
}
