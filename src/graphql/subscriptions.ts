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
          description
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
export const onUpdateAdCategory = /* GraphQL */ `
  subscription OnUpdateAdCategory {
    onUpdateAdCategory {
      id
      name
      ads {
        items {
          id
          title
          description
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
export const onDeleteAdCategory = /* GraphQL */ `
  subscription OnDeleteAdCategory {
    onDeleteAdCategory {
      id
      name
      ads {
        items {
          id
          title
          description
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
export const onCreateAd = /* GraphQL */ `
  subscription OnCreateAd {
    onCreateAd {
      id
      title
      description
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
export const onUpdateAd = /* GraphQL */ `
  subscription OnUpdateAd {
    onUpdateAd {
      id
      title
      description
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
export const onDeleteAd = /* GraphQL */ `
  subscription OnDeleteAd {
    onDeleteAd {
      id
      title
      description
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
export const onCreateAdSubCategory = /* GraphQL */ `
  subscription OnCreateAdSubCategory {
    onCreateAdSubCategory {
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
export const onUpdateAdSubCategory = /* GraphQL */ `
  subscription OnUpdateAdSubCategory {
    onUpdateAdSubCategory {
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
export const onDeleteAdSubCategory = /* GraphQL */ `
  subscription OnDeleteAdSubCategory {
    onDeleteAdSubCategory {
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
