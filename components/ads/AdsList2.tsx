import { useState } from 'react';
import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Advertising } from './Ad';
import styles from './Ad.module.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const ADS_QUERY = gql`
  query ListAds(
    $after: String
    $filter: ModelAdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items(first: 5, after: $after) {
        edges {
          node {
            id
            title
            description
            image
            adSubCategoryID
            adSubCategory {
              id
              name
              adCategoryID
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
        }
        pageInfo {
          endCursor
        }
      }
      nextToken
    }
  }
`;

const AdsList2 = () => {
  const { data, error, loading, fetchMore } = useQuery(ADS_QUERY, {
    variables: {
      after: null,
    },
  });
  if (error) return <div>errors</div>;
  if (loading || !data) return <div>loading</div>;

  return (
    <>
      <ul>
        {data.listAds.items.edges.map(({ node }) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          const { endCursor } = data.listAds.items.pageInfo;

          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.listAds.items.edges = [
                ...prevResult.listAds.items.edges,
                ...fetchMoreResult.listAds.items.edges,
              ];
              return fetchMoreResult;
            },
          });
        }}
      >
        more
      </button>
    </>
  );
};

export { AdsList2 };
