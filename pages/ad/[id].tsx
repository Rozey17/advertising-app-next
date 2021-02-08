import * as React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getAd } from 'src/graphql/queries';
import {
  GetAdQuery,
  ListAdSubCategorysQueryVariables,
  useListAdSubCategorysQuery,
} from 'src';
import { GetServerSideProps } from 'next';
import awsmobile from 'src/aws-exports';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Card,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import slugify from 'slugify';
import moment from 'moment';

import { Layout } from 'components/Layout/Layout';

API.configure(awsmobile);

interface AdDetailsProps {
  ad: GetAdQuery['getAd'] | null | undefined;
}

const AdPage = ({ ad }: AdDetailsProps) => {
  const variables: ListAdSubCategorysQueryVariables = {
    limit: 100,
  };

  const { data, loading } = useListAdSubCategorysQuery({
    variables,
  });

  const AdSubCategories =
    data && data.listAdSubCategorys ? data.listAdSubCategorys.items : [];
  const defaultPhotoUrl =
    'https://www.labaleine.fr/sites/default/files/image-not-found.jpg';
  const dateToStore = ad.createdAt;
  moment.locale('fr');
  const momentDate = moment(dateToStore).format('LLL');
  // const momentDate = moment(dateToStore).calendar();
  if (!ad) {
    return <h1> No ad found</h1>;
  }
  return (
    <Layout title={ad.title}>
      <div className='container'>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          <Typography color='textPrimary'>
            {ad.adSubCategory.adCategory.name}
          </Typography>

          <Link
            color='inherit'
            href={`/${slugify(ad.adSubCategory.name, { lower: true })}`}
          >
            {ad.adSubCategory.name}
          </Link>
          <Typography color='textPrimary'>Annonce</Typography>
        </Breadcrumbs>

        <h2>{ad.title}</h2>

        <a>Annonce publiée le {momentDate}</a>
        <br />
        <div className='card'>
          <Card>
            <img className='img' src={ad.image ? ad.image : defaultPhotoUrl} />
          </Card>
        </div>

        <div>
          <Card className='description'>
            <p>{ad.description}</p>
          </Card>
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
            margin-bottom: 10px;
          }

          .description {
            height: 50%;
          }

          description p {
            padding-left: 20px;
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
