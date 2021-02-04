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
          description
          image
          adCategoryID
          adSubCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      subCategories {
        items {
          id
          name
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
        subCategories {
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
      description
      image
      adCategoryID
      adCategory {
        id
        name
        ads {
          nextToken
        }
        subCategories {
          nextToken
        }
        createdAt
        updatedAt
      }
      adSubCategoryID
      adSubCategory {
        id
        name
        adCategoryID
        adCategory {
          id
          name
          createdAt
          updatedAt
        }
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
        description
        image
        adCategoryID
        adCategory {
          id
          name
          createdAt
          updatedAt
        }
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
      nextToken
    }
  }
`;
export const getAdSubCategory = /* GraphQL */ `
  query GetAdSubCategory($id: ID!) {
    getAdSubCategory(id: $id) {
      id
      name
      adCategoryID
      adCategory {
        id
        name
        ads {
          nextToken
        }
        subCategories {
          nextToken
        }
        createdAt
        updatedAt
      }
      ads {
        items {
          id
          title
          description
          image
          adCategoryID
          adSubCategoryID
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
export const listAdSubCategorys = /* GraphQL */ `
  query ListAdSubCategorys(
    $filter: ModelAdSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdSubCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        adCategoryID
        adCategory {
          id
          name
          createdAt
          updatedAt
        }
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
