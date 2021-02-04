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
  image: string;
}

const Ad = ({
  title,
  description,
  adSubCategoryID,
  createdAt,
  image,
}: Props) => {
  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
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
        title='image for the ad'
        image={image ? image : defaultPhotoUrl}
      />
    </Card>
  );
};

export { Ad };
