import { loadIdToken } from 'components/auth/firebaseAdmin';
import FirebaseAuth from "components/firebaseAuth";
import { Layout } from "components/Layout/Layout";

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
