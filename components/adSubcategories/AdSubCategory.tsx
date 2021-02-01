import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './AdSubCategory.module.css';
import { Paper } from '@material-ui/core';

interface Props {
  name: string;
}

const AdSubCategory = ({ name }: Props) => {
  return (
    <div className={styles.paper}>
      <Paper elevation={3}>
        <Card className={styles.card} variant='outlined'>
          <p>
            <b> {name}</b>
          </p>
        </Card>
      </Paper>
    </div>
  );
};

export { AdSubCategory };
