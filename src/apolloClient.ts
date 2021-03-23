import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import awsmobile from './aws-exports';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
// optional, this configuration is only necessary if you're working with AWS AppSync
const middlewareLink = setContext(() => ({
  headers: {
    'X-Api-Key': awsmobile.aws_appsync_apiKey,
  },
}));

const httpLink = new HttpLink({
  uri: awsmobile.aws_appsync_graphqlEndpoint,
  fetch: fetch,
});

const link = middlewareLink.concat(httpLink);

const client = new ApolloClient<NormalizedCacheObject>({
  link: link as any,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
