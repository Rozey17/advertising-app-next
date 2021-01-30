import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import awsmobile from './aws-exports';
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

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
