import { GetServerSideProps, NextApiRequest } from 'next';
import { loadIdToken } from 'components/auth/firebaseAdmin';
import { Layout } from 'components/layout/Layout';
import { CreateAdForm } from 'components/ads/CreateAdForm';

export default function CreateAd() {
  return (
    <Layout>
      <CreateAdForm />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const uid = await loadIdToken(ctx.req as NextApiRequest);

  if (!uid) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth',
      },
      props: {},
    };
  }

  return { props: {} };
};

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const { Auth } = withSSRContext({ req });
//   try {
//     const user = await Auth.currentAuthenticatedUser();
//     console.log('user: ', user);

//     return {
//       props: {
//         authenticated: true,
//         username: user.username,
//       },
//     };
//   } catch (err) {
//     console.log('error, user not authenticated');

//     res.writeHead(302, { Location: '/profile' });
//     // res.end();
//   }
//   return { props: {} };
// };
