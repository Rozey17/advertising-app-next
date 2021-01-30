import '../styles/globals.css';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
// import { AppProps } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import client from 'src/apolloClient';
import App from 'next/app';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
Amplify.configure({
  ...config,
  ssr: true,
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloHooksProvider client={client}>
        <Component {...pageProps} />
      </ApolloHooksProvider>
    );
  }
}

export default MyApp;
