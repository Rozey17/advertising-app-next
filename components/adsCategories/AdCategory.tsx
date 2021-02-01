import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './AdCategory.module.css';
import { Paper } from '@material-ui/core';
import { AdSubCategoriesList } from 'components/adSubcategories/AdSubCategoriesList';

interface Props {
  name: string;
  adCategoryID: string;
}

const AdCategory = ({ name, adCategoryID }: Props) => {
  return (
    <div className={styles.paper}>
      <Paper elevation={3}>
        <Card variant='outlined'>
          <p>
            <b> {name}</b>
          </p>
          <AdSubCategoriesList adCategoryID={adCategoryID} />
        </Card>
      </Paper>
    </div>
  );
};

export { AdCategory };
