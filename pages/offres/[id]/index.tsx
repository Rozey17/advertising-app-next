import * as React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getAd } from 'src/graphql/queries';
import {
  DeleteAdInput,
  GetAdQuery,
  ListAdSubCategorysQuery,
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
import { Layout } from 'components/layout/Layout';

import { useAuth } from 'components/auth/useAuth';

import Categories from 'components/Categories';
import Head from 'next/head';

API.configure(awsmobile);

interface AdDetailsProps {
  ad: GetAdQuery['getAd'] | null | undefined;
}

const AdPage = ({ ad }: AdDetailsProps) => {
  const { authenticated } = useAuth();

  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
  moment.locale('fr');

  if (!ad) {
    return (
      <Layout>
        <h1> Pas d'annonce trouvée.</h1>
      </Layout>
    );
  }
  return (
    <div>
      <Head>
        <title>{ad.title}</title>
      </Head>
      <Layout>
        <div className='container'>
          <Breadcrumbs
            color='primary'
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            <Link href='/'>
              <a>Accueil</a>
            </Link>

            <Categories
              name={ad.adSubCategory.adCategory.name}
              adCategoryID={ad.adSubCategory.adCategoryID}
            />

            <Link
              href={`/offres/${slugify(ad.adSubCategory.name, {
                lower: true,
              })}`}
            >
              <a>{ad.adSubCategory.name}</a>
            </Link>
            <Typography>{ad.title}</Typography>
          </Breadcrumbs>
          <Box>
            <div>
              <Typography>
                <h2 className='text-2xl font-bold my-4'>{ad.title}</h2>
              </Typography>
            </div>
          </Box>
          <Typography>
            Annonce publiée le {moment(ad.createdAt).format('LLL')}
          </Typography>

          <div className='card'>
            <Card>
              <img
                className='img'
                src={ad.image ? ad.image : defaultPhotoUrl}
                // className='mt-4 mb-4 mx-auto my-auto'
                // style={{ width: '576px', height: `${(9 / 16) * 576}px` }}
                //     sizes='(max-width: 320px) 280px,
                // (max-width: 480px) 440px,
                // 800px'
              />
            </Card>
          </div>

          <div className='description'>
            <Typography>
              <b>Description</b>
            </Typography>
            <br />
            <Typography className='typo'>{ad.description}</Typography>
          </div>
          <div className='description'>
            <Typography>
              <b>Contact</b>
            </Typography>
            <Typography>
              {ad.contact ? ad.contact : 'Non communiqué'}
            </Typography>
          </div>
          <div>
            <Typography>
              {authenticated && (
                <Link href={`/offres/${ad.id}/edit`}>
                  <a className='text-blue-800 font-bold'>Modifier Annonce</a>
                </Link>
              )}
            </Typography>
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

            .container a {
              text-decoration: none;
            }

            .container a:hover {
              text-decoration: underline;
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
    </div>
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
