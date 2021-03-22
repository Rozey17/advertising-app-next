import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from 'src/apolloClient';
import '../styles/globals.css';
import Head from 'next/head';
import { AuthProvider } from 'components/auth/useAuth';
// import { useApollo } from 'src/apolloClient';
Amplify.configure({
  ...config,
  ssr: true,
});
export default function MyApp({ Component, pageProps }: AppProps) {
  // const client = useApollo();
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Head>
          <title>Annonce 45</title>

          <link rel='shortcut icon' href='browser-web-icon.png' />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  );
}
