import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function PublicSector() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Secteur Public</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='fa64bb8d-8dcc-4b46-94b7-8311e734fc81' />
    </Layout>
  );
}
