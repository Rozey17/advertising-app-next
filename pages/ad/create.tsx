import { CreateAdForm } from 'components/ads/CreateAdForm';
import { Container } from '@material-ui/core';
import { Layout } from 'components/Layout/Layout';
import { Auth, withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

export default function CreateAd() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      // if there is no authenticated user, redirect to profile page
      .catch(() => router.push('/auth'));
  }, []);
  if (!user) return null;
  return (
    <Layout>
      <CreateAdForm />
    </Layout>
  );
}

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
