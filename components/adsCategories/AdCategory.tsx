import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './Ad.module.css';
import { Paper } from '@material-ui/core';

interface Props {
  title: string;
  categoryName: string;
}

const AdCategory = ({ title, categoryName }: Props) => {
  return (
    <div className={styles.paper}>
      <Paper elevation={3}>
        <Card className={styles.card} variant='outlined'>
          <p>
            <b>AdCategory:</b> {title}
          </p>
          <p>
            Category : <b>{categoryName}</b>
          </p>
        </Card>
      </Paper>
    </div>
  );
};

export { AdCategory };
