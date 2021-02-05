import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './Ad.module.css';
import { CardContent, CardMedia, Paper } from '@material-ui/core';
import Link from 'next/link';
import moment from 'moment';
import { Ad } from 'src';
import slugify from 'slugify';
interface adProps {
  ad: Ad;
}

const Advertising = ({ ad }: adProps) => {
  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
  const dateToStore = ad.createdAt;
  moment.locale('fr');
  const momentDate = moment(dateToStore).format('LL');
  if (!ad) {
    return <h1>Sorry this Ad doesn't exist </h1>;
  }
  return (
    <Card className={styles.paper}>
      <div className={styles.box1}>
        <Link
          href='/ad/title/id'
          as={`/${slugify(ad.title, { lower: true })}/${ad.id}`}
        >
          <a>
            <b>{ad.title}</b>
          </a>
        </Link>
        <br />
        <p>Publié le: {momentDate}</p>
        <p>{ad.description}</p>
      </div>
      <CardMedia
        className={styles.img}
        title='image for the ad'
        image={ad.image ? ad.image : defaultPhotoUrl}
      />
    </Card>
  );
};

export { Advertising };
