import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function Internships() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Stages</h2>
        </Typography>
      </div>

      <AdsList adSubCategoryID='14bfc454-22f6-4ebd-82a7-43086853a054' />
    </Layout>
  );
}
