import * as React from 'react';
import { useGetAdQuery } from "src";
import awsmobile from "src/aws-exports";
import { UpdateAdForm } from "components/ads/UpdateAdForm";
import { useAuth } from "components/auth/useAuth";
import { Layout } from "components/Layout/Layout";
import { useRouter } from "next/router";
import { GetAdQueryVariables } from "src/API";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const variables: GetAdQueryVariables = {
    id: id as string,
  };
  const { data, loading } = useGetAdQuery({
    variables,
  });

  const ad = data && data.getAd ? data.getAd : null;
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

export default EditPage;
