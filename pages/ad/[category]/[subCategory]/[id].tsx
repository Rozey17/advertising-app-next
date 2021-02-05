// import { AdModel } from 'api/models';
// import { GetServerSideProps } from 'next';
// import { Ad, ListAdsQueryVariables, useListAdsQuery } from 'src';

// interface AdDetailsProps {
//   ad: Ad | null | undefined;
// }

// export default function AdDetails ({ad}:AdDetailsProps){
// ad.
// }

// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//     const ad = (id) => {

//     const variables: ListAdsQueryVariables = {
//       filter:
//         id && id.trim()
//           ? {
//               or: [{ id: { contains: ctx.params.id.toString() } }],
//             }
//           : null,
//       limit: 1,
//     };
//     const { data } = useListAdsQuery({
//       variables,
//     });

//     const ad = data && data.listAds ? data.listAds.items : [];

//     return ad
//   };
//   return { props: { ad: ad } };
// };
