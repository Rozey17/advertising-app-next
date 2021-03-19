import * as React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getAd } from 'src/graphql/queries';
import { GetAdQuery } from 'src';
import { GetServerSideProps } from 'next';
import awsmobile from 'src/aws-exports';

import { Layout } from 'components/Layout/Layout';
import { UpdateAdForm } from 'components/ads/UpdateAdForm';
import { useAuth } from 'components/auth/useAuth';

API.configure(awsmobile);

interface AdDetailsProps {
  ad: GetAdQuery['getAd'] | null | undefined;
}

const DeletePage = ({ ad }: AdDetailsProps) => {
  const { authenticated } = useAuth();

  if (!ad) {
    return (
      <Layout>
        <h1> No ad found</h1>
      </Layout>
    );
  }
  return <Layout>{authenticated && <UpdateAdForm />}</Layout>;
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

export default DeletePage;
