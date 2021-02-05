import { AdModel } from 'api/models';
import { GetServerSideProps } from 'next';
import { Ad, ListAdsQueryVariables, useListAdsQuery } from 'src';
import { getAd } from 'src/graphql/queries';

interface AdDetailsProps {
  ad: Ad | null | undefined;
}

export default function AdDetails({ ad }: AdDetailsProps) {
  return (
    <div>
      <h1>{ad.title}</h1>
      <h1>{ad.description}</h1>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   getAd()
//     };

//     const

// let query=`query{
//     event(query:{
//         _id:'${params.id}
//     }){
//         _id,name,url
//     }
// }`

// const data= await fetch

export const getStaticPaths = () => {
  const query = `
{}`;
};
