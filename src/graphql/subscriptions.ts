/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdCategory = /* GraphQL */ `
  subscription OnCreateAdCategory {
    onCreateAdCategory {
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
export const onUpdateAdCategory = /* GraphQL */ `
  subscription OnUpdateAdCategory {
    onUpdateAdCategory {
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
export const onDeleteAdCategory = /* GraphQL */ `
  subscription OnDeleteAdCategory {
    onDeleteAdCategory {
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
export const onCreateAd = /* GraphQL */ `
  subscription OnCreateAd {
    onCreateAd {
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
export const onUpdateAd = /* GraphQL */ `
  subscription OnUpdateAd {
    onUpdateAd {
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
export const onDeleteAd = /* GraphQL */ `
  subscription OnDeleteAd {
    onDeleteAd {
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
