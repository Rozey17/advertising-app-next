import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './Ad.module.css';
import { CardContent, CardMedia, Paper } from '@material-ui/core';
import Link from 'next/link';
import moment from 'moment';
interface Props {
  title: string;
  description: string;
  adSubCategoryID: string;
  createdAt: string;
}

const Ad = ({ title, description, adSubCategoryID, createdAt }: Props) => {
  const dateToStore = createdAt;
  moment.locale('fr');
  const momentDate = moment(dateToStore).format('LL');
  return (
    <Card className={styles.paper}>
      <div className={styles.box1}>
        <Link href='/'>
          <b>{title}</b>
        </Link>
        <br />
        <p>Publié le: {momentDate}</p>
        <p>{description}</p>
      </div>
      <CardMedia
        className={styles.img}
        title='Live from space album cover'
        image='https://www.labaleine.fr/sites/default/files/image-not-found.jpg'
      />
    </Card>
  );
};

export { Ad };
