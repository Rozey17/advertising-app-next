// import { useState, useEffect } from 'react';
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
// import { Auth } from 'aws-amplify';
// import { Layout } from 'components/Layout/Layout';

// function Profile() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     Auth.currentAuthenticatedUser()
//       .then((user) => {
//         console.log('User: ', user);
//         setUser(user);
//       })
//       .catch(() => setUser(null));
//   }, []);
//   return (
//     <div>
//       <Layout>
//         {user && <h1>Welcome, {user.username}</h1>}
//         {/* <AmplifySignOut /> */}
//       </Layout>
//     </div>
//   );
// }

// export default withAuthenticator(Profile);

import { loadIdToken } from 'components/auth/firebaseAdmin';
import FirebaseAuth from 'components/firebaseAuth';
import { Layout } from 'components/Layout/Layout';
import { GetServerSideProps, NextApiRequest } from 'next';

export default function Auth() {
  return (
    <Layout>
      <div style={{ marginTop: 15 }}>
        <FirebaseAuth />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (uid) {
    res.setHeader('location', '/');
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};
