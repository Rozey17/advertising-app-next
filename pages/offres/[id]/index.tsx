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
import awsmobile from "src/aws-exports";
import slugify from "slugify";
import moment from "moment";
import Link from "next/link";
import { useAuth } from "components/auth/useAuth";
import Categories from "components/Categories";
import Head from "next/head";
import { Layout } from "components/Layout/Layout";

API.configure(awsmobile);

interface AdDetailsProps {
  ad: GetAdQuery["getAd"] | null | undefined;
}

const AdPage = ({ ad }: AdDetailsProps) => {
  const { authenticated } = useAuth();

  const defaultPhotoUrl =
    "https://www.labaleine.fr/sites/default/files/image-not-found.jpg";
  moment.locale("fr");

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
        <link rel="shortcut icon" href="browser-web-icon.png" />
      </Head>
      <Layout>
        <div className="block ml-auto mr-auto w-1/2 hy-6">
          {/* <Breadcrumbs
            color="primary"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link href="/">
              <a>Accueil</a>
            </Link>

            <Categories
              name={ad!.adSubCategory.name}
              adCategoryID={ad!.adSubCategory.id}
            />

            <Link
              href={`/offres/${slugify(ad!.adSubCategory.name, {
                lower: true,
              })}`}
            >
              <a>{ad!.adSubCategory.name}</a>
            </Link>
            {ad!.title}
          </Breadcrumbs> */}
          <div className="text-2xl font-bold my-4 ">{ad!.title}</div>
          Annonce publiée le {moment(ad!.createdAt).format("LLL")}
          <div className="p-2 my-3 bg-white shadow-lg rounded-md">
            <img
              className="img"
              src={ad!.image ? ad!.image : defaultPhotoUrl}
              sizes="(max-width: 320px) 280px,
                (max-width: 480px) 440px"
            />
          </div>
          <div className="font-bold mb-3">Description</div>
          <div className="mb-3">{ad!.description}</div>
          <div className="font-bold mb-1">Contact</div>
          <div>{ad!.contact ? ad!.contact : "Non communiqué"}</div>
          <div>
            {authenticated && (
              <Link href={`/offres/${ad!.id}/edit`}>
                <a className="text-blue-800 font-bold">Modifier Annonce</a>
              </Link>
            )}
          </div>
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
