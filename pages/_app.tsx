import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from 'src/apolloClient';

Amplify.configure({
  ...config,
  ssr: true,
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
