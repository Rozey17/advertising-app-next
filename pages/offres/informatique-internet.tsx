import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function Internet() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>
            Annonces Informatique, Internet
          </h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='5d26d488-b5d7-4fa8-a1ee-71accae15378' />
    </Layout>
  );
}
