import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function Bureau() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Bureaux</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='f241cb61-fec4-4cff-8a02-ec0315754b41' />
    </Layout>
  );
}
