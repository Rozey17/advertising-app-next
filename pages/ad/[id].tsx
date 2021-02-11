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
import DeleteIcon from '@material-ui/icons/Delete';
// import Link from '@material-ui/core/Link';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Card,
  Button,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import slugify from 'slugify';
import moment from 'moment';
import Link from 'next/link';

import { Layout } from 'components/Layout/Layout';
import { UpdateAdForm } from 'components/ads/UpdateAdForm';

API.configure(awsmobile);

interface AdDetailsProps {
  ad: GetAdQuery['getAd'] | null | undefined;
}

const AdPage = ({ ad }: AdDetailsProps) => {
  const [deleteAd] = useDeleteAdMutation();
  const input: DeleteAdInput = {
    id: ad?.id,
  };
  const variables = { input };
  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
  moment.locale('fr');
  if (!ad) {
    return <h1> No ad found</h1>;
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

          <Link href={`/${slugify(ad.adSubCategory.name, { lower: true })}`}>
            {ad.adSubCategory.name}
          </Link>
          <Typography color='primary'>Annonce</Typography>
        </Breadcrumbs>

        <h2>{ad.title}</h2>
        <Typography>
          Annonce publiée le {moment(ad.createdAt).format('LLL')}
        </Typography>

        <div className='card'>
          <Card>
            <img className='img' src={ad.image ? ad.image : defaultPhotoUrl} />
          </Card>
        </div>

        <div className='description'>
          <Typography className='typo'>{ad.description}</Typography>
        </div>
        <div className='button'>
          <UpdateAdForm />
          <div className='divider' />
          <Button
            className='button'
            variant='contained'
            color='secondary'
            endIcon={<DeleteIcon />}
            onClick={() => {
              deleteAd({ variables });
              // window.confirm('Voulez Vous Confirmer La Suppression ?');
              window.location.href = `/${slugify(ad.adSubCategory.name, {
                lower: true,
              })}`;
            }}
          >
            <Typography>SUPPRIMER</Typography>
          </Button>
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
            margin-top: 10px;
            margin-bottom: 15px;
          }

          .description {
            height: 100px;
          }
          .button {
            margin: auto;
          }

          .divider {
            width: 10px;
            height: auto;
            display: inline-block;
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
