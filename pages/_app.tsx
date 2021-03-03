import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from 'src/apolloClient';
import '../styles/globals.css';
import Head from 'next/head';
Amplify.configure({
  ...config,
  ssr: true,
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Annonce 45</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='browser-web-icon.png' />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
