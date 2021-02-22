import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './Ad.module.css';
import {
  CardContent,
  CardMedia,
  Paper,
  IconButton,
  Typography,
} from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Link from 'next/link';
import moment from 'moment';
import { Ad } from 'src';
import slugify from 'slugify';
import { useRouter } from 'next/router';
interface adProps {
  ad: Ad;
}

const Advertising = ({ ad }: adProps) => {
  const router = useRouter();
  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
  const dateToStore = ad.createdAt;
  moment.locale('fr');
  const momentDate = moment(dateToStore).format('LL');

  return (

    <Card className={styles.paper} onClick={() => router.push(`/ad/${ad.id}`)}>

      <div className={styles.box1}>

        <Typography>
          <b>{ad.title}</b>
          <br />
        <a>Publié le: {momentDate}</a>
        <p>{ad.description}</p>
        </Typography>

        
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
