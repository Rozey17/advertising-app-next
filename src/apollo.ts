import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { useMemo } from 'react';
import awsmobile from './aws-exports';

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: awsmobile.aws_appsync_graphqlEndpoint,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  return client;
}
