import { CreateAdForm } from 'components/ads/CreateAdForm';
import { Container } from '@material-ui/core';
import { Layout } from 'components/Layout/Layout';
import { Auth, withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import { loadIdToken } from 'components/auth/firebaseAdmin';
import { useAuth } from 'components/auth/useAuth';

export default function CreateAd() {
  const { logout, authenticated } = useAuth();

  // const [user, setUser] = useState(null);
  // const router = useRouter();
  // useEffect(() => {
  //   Auth.currentAuthenticatedUser()
  //     .then((user) => setUser(user))
  //     // if there is no authenticated user, redirect to profile page
  //     .catch(() => router.push('/auth'));
  // }, []);
  // if (!user) return null;
  return (
    <Layout>
      <CreateAdForm />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const uid = await loadIdToken(ctx.req as NextApiRequest);

  if (!uid) {
    // ctx.res.setHeader('location', '/auth');
    // ctx.res.statusCode = 302;
    // ctx.res.end();
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
