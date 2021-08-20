import * as React from 'react';

import { useGetAdQuery } from "src";
import slugify from "slugify";
import moment from "moment";
import Link from "next/link";
import { useAuth } from "components/auth/useAuth";
import Categories from "components/Categories";
import Head from "next/head";
import { Layout } from "components/Layout/Layout";
import { useRouter } from "next/router";
import { GetAdQueryVariables } from "src/API";

const AdPage = () => {
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
          <nav className="text-blue-700 my-8">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center hover:underline">
                <Link href="/">
                  <a>Accueil</a>
                </Link>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              {/* <li className="flex items-center">
                <Categories
                  name={ad!.adSubCategory.name}
                  adCategoryID={ad!.adSubCategory.id}
                />
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li> */}
              <li className="flex items-center hover:underline">
                <Link
                  href={`/offres/${slugify(ad!.adSubCategory.name, {
                    lower: true,
                  })}`}
                >
                  <a>{ad!.adSubCategory.name}</a>
                </Link>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">{ad!.title}</li>
            </ol>
          </nav>
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
          <div className="my-4">
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


export default AdPage;
