import * as React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getAd } from 'src/graphql/queries';
import {
  DeleteAdInput,
  GetAdQuery,
  ListAdSubCategorysQueryVariables,
  useDeleteAdMutation,
  useListAdSubCategorysQuery,
} from 'src';
import { GetServerSideProps } from 'next';
import awsmobile from 'src/aws-exports';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Card,
  Button,
  Box,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import slugify from 'slugify';
import moment from 'moment';
import Link from 'next/link';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Layout } from 'components/Layout/Layout';
import { UpdateAdForm } from 'components/ads/UpdateAdForm';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

API.configure(awsmobile);

interface AdDetailsProps {
  ad: GetAdQuery['getAd'] | null | undefined;
}

const AdPage = ({ ad }: AdDetailsProps) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user);
        setUser(user);
      })
      .catch(() => setUser(null));
  }, []);
  const [deleteAd] = useDeleteAdMutation();
  const input: DeleteAdInput = {
    id: ad?.id,
  };
  const variables = { input };
  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
  moment.locale('fr');
  if (!ad) {
    return (
      <Layout>
        <h1> No ad found</h1>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className='container'>
        <Breadcrumbs
          color='primary'
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          <Typography color='primary'>
            {ad.adSubCategory.adCategory.name}
          </Typography>

          <Link
            href={`/offres/${slugify(ad.adSubCategory.name, { lower: true })}`}
          >
            {ad.adSubCategory.name}
          </Link>
          <Typography>{ad.title}</Typography>
        </Breadcrumbs>
        <Box>
          <div className='cardAction'>
            <Typography>
              {/* <span> */}
              <h2>{ad.title}</h2> {/* </span> */}
            </Typography>
            <span>
              <IconButton aria-label='add to favorites'>
                <FavoriteBorderOutlinedIcon
                  fontSize='inherit'
                  // color='primary'
                />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareOutlinedIcon fontSize='inherit' />
              </IconButton>
            </span>
          </div>
        </Box>
        <Typography>
          Annonce publiée le {moment(ad.createdAt).format('LLL')}
        </Typography>

        <div className='card'>
          <Card>
            <img className='img' src={ad.image ? ad.image : defaultPhotoUrl} />
          </Card>
        </div>

        <div className='description'>
          <Typography>
            <b>Description</b>
          </Typography>
          <br />
          <Typography className='typo'>{ad.description}</Typography>
        </div>
        <div>
          {user && (
            <UpdateAdForm
              handleOnClick={() => {
                deleteAd({ variables });
                window.confirm('Voulez Vous Confirmer La Suppression ?');
                window.location.href = `/offres/${slugify(
                  ad.adSubCategory.name,
                  {
                    lower: true,
                  }
                )}`;
              }}
            />
          )}
        </div>
        <style jsx>{`
          .container {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 25px;
            margin-bottom: 25px;
            width: 50%;
          }
          .img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            margin-bottom: 10px;
            width: 50%;
          }
          .card {
            position: relative;
            margin-top: 10px;
            margin-bottom: 15px;
            width: ;
          }

          .description {
            height: 100px;
          }

          .divider {
            width: 10px;
            height: auto;
            display: inline-block;
          }

          card .contact {
            position: absolute;
            left: auto;
            width: 100px;
            height: 120px;
            border: 3px solid blue;
          }

          .cardAction {
            display: flex;

            justify-content: space-between;
          }

          .icons {
            text-align: right;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<AdDetailsProps> = async (
  context
) => {
  //   const id = context.params.id;
  const { id } = context.query;
  const ad = (await API.graphql({
    ...graphqlOperation(getAd),
    variables: { id },
  })) as { data: GetAdQuery };

  return { props: { ad: ad.data.getAd || null } };
};

export default AdPage;
