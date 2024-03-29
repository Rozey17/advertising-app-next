import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function Colocation() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Colocation</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='a3da30fa-b70c-4a2d-b590-9c5c74048bb1' />
    </Layout>
  );
}
