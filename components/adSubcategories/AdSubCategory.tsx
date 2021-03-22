import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './AdSubCategory.module.css';
import { Paper } from '@material-ui/core';
import { AdsList } from 'components/ads/adsList';

interface Props {
  name: string;
  adSubCategoryID: string;
}

const AdSubCategory = ({ name, adSubCategoryID }: Props) => {
  return (
    <div className={styles.paper}>
      <Paper elevation={3}>
        <Card variant='outlined'>
          <a>{name}</a>
          <AdsList adSubCategoryID={adSubCategoryID} />
        </Card>
      </Paper>
    </div>
  );
};

export { AdSubCategory };
