import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './AdCategory.module.css';
import { Box, Grid, Paper } from '@material-ui/core';
import { AdSubCategoriesList } from 'components/adSubcategories/AdSubCategoriesList';

interface Props {
  name: string;
  adCategoryID: string;
}

const AdCategory = ({ name, adCategoryID }: Props) => {
  return (
    <div className={styles.global}>
      <Box>
        <b> {name}</b>
        <hr />
        <AdSubCategoriesList adCategoryID={adCategoryID} />
      </Box>
    </div>
  );
};

export { AdCategory };
