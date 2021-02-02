import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './Ad.module.css';
import { Paper } from '@material-ui/core';

interface Props {
  title: string;
  description: string;
  adSubCategoryID: string;
}

const Ad = ({ title, description, adSubCategoryID }: Props) => {
  return (
    <div className={styles.paper}>
      <Paper elevation={3}>
        <Card className={styles.card} variant='outlined'>
          <p>
            <b>{title}</b>
          </p>
          <br />
          <p>{description}</p>
        </Card>
      </Paper>
    </div>
  );
};

export { Ad };
