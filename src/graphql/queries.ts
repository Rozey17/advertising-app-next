/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAdCategory = /* GraphQL */ `
  query GetAdCategory($id: ID!) {
    getAdCategory(id: $id) {
      id
      name
      ads {
        items {
          id
          title
          adCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAdCategorys = /* GraphQL */ `
  query ListAdCategorys(
    $filter: ModelAdCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ads {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAd = /* GraphQL */ `
  query GetAd($id: ID!) {
    getAd(id: $id) {
      id
      title
      adCategoryID
      adCategory {
        id
        name
        ads {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        adCategoryID
        adCategory {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
