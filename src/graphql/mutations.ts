/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdCategory = /* GraphQL */ `
  mutation CreateAdCategory(
    $input: CreateAdCategoryInput!
    $condition: ModelAdCategoryConditionInput
  ) {
    createAdCategory(input: $input, condition: $condition) {
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
export const updateAdCategory = /* GraphQL */ `
  mutation UpdateAdCategory(
    $input: UpdateAdCategoryInput!
    $condition: ModelAdCategoryConditionInput
  ) {
    updateAdCategory(input: $input, condition: $condition) {
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
export const deleteAdCategory = /* GraphQL */ `
  mutation DeleteAdCategory(
    $input: DeleteAdCategoryInput!
    $condition: ModelAdCategoryConditionInput
  ) {
    deleteAdCategory(input: $input, condition: $condition) {
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
export const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
      id
      title
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
      createdAt
      updatedAt
    }
  }
`;
export const updateAd = /* GraphQL */ `
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
      id
      title
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteAd = /* GraphQL */ `
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
      id
      title
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
      createdAt
      updatedAt
    }
  }
`;
export const createAdSubCategory = /* GraphQL */ `
  mutation CreateAdSubCategory(
    $input: CreateAdSubCategoryInput!
    $condition: ModelAdSubCategoryConditionInput
  ) {
    createAdSubCategory(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateAdSubCategory = /* GraphQL */ `
  mutation UpdateAdSubCategory(
    $input: UpdateAdSubCategoryInput!
    $condition: ModelAdSubCategoryConditionInput
  ) {
    updateAdSubCategory(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdSubCategory = /* GraphQL */ `
  mutation DeleteAdSubCategory(
    $input: DeleteAdSubCategoryInput!
    $condition: ModelAdSubCategoryConditionInput
  ) {
    deleteAdSubCategory(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
