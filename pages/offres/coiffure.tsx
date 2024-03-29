import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function Haircuts() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Coiffure</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='1cf29a07-e00b-4111-a50b-2669b2503440' />
    </Layout>
  );
}
