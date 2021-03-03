import { useState, useEffect } from 'react';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { Layout } from 'components/Layout/Layout';

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user);
        setUser(user);
      })
      .catch(() => setUser(null));
  }, []);
  return (
    <div>
      <Layout>
        {user && <h1>Welcome, {user.username}</h1>}
        {/* <AmplifySignOut /> */}
      </Layout>
    </div>
  );
}

export default withAuthenticator(Profile);
