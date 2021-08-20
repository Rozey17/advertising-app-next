import { Typography } from '@material-ui/core';
import { AdsList } from "components/ads/adsList";
import { Layout } from "components/Layout/Layout";
import styles from './Ads.module.css';

export default function Logistics() {
  return (
    <Layout>
      <div className={styles.title}>
        <Typography>
          <h2 className='text-2xl font-bold'>Annonces Achats, Logistique</h2>
        </Typography>
      </div>
      <AdsList adSubCategoryID='9815c7b4-3adf-437b-b185-a1ccf516782e' />
    </Layout>
  );
}
