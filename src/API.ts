/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAdCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelAdCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAdCategoryConditionInput | null > | null,
  or?: Array< ModelAdCategoryConditionInput | null > | null,
  not?: ModelAdCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateAdCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteAdCategoryInput = {
  id?: string | null,
};

export type CreateAdInput = {
  id?: string | null,
  title: string,
  adCategoryID: string,
};

export type ModelAdConditionInput = {
  title?: ModelStringInput | null,
  adCategoryID?: ModelIDInput | null,
  and?: Array< ModelAdConditionInput | null > | null,
  or?: Array< ModelAdConditionInput | null > | null,
  not?: ModelAdConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAdInput = {
  id: string,
  title?: string | null,
  adCategoryID?: string | null,
};

export type DeleteAdInput = {
  id?: string | null,
};

export type ModelAdCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAdCategoryFilterInput | null > | null,
  or?: Array< ModelAdCategoryFilterInput | null > | null,
  not?: ModelAdCategoryFilterInput | null,
};

export type ModelAdFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  adCategoryID?: ModelIDInput | null,
  and?: Array< ModelAdFilterInput | null > | null,
  or?: Array< ModelAdFilterInput | null > | null,
  not?: ModelAdFilterInput | null,
};

export type CreateAdCategoryMutationVariables = {
  input: CreateAdCategoryInput,
  condition?: ModelAdCategoryConditionInput | null,
};

export type CreateAdCategoryMutation = {
  createAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdCategoryMutationVariables = {
  input: UpdateAdCategoryInput,
  condition?: ModelAdCategoryConditionInput | null,
};

export type UpdateAdCategoryMutation = {
  updateAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdCategoryMutationVariables = {
  input: DeleteAdCategoryInput,
  condition?: ModelAdCategoryConditionInput | null,
};

export type DeleteAdCategoryMutation = {
  deleteAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdMutationVariables = {
  input: CreateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type CreateAdMutation = {
  createAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdMutationVariables = {
  input: UpdateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type UpdateAdMutation = {
  updateAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdMutationVariables = {
  input: DeleteAdInput,
  condition?: ModelAdConditionInput | null,
};

export type DeleteAdMutation = {
  deleteAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAdCategoryQueryVariables = {
  id: string,
};

export type GetAdCategoryQuery = {
  getAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdCategorysQueryVariables = {
  filter?: ModelAdCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdCategorysQuery = {
  listAdCategorys:  {
    __typename: "ModelAdCategoryConnection",
    items:  Array< {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAdQueryVariables = {
  id: string,
};

export type GetAdQuery = {
  getAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdsQueryVariables = {
  filter?: ModelAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdsQuery = {
  listAds:  {
    __typename: "ModelAdConnection",
    items:  Array< {
      __typename: "Ad",
      id: string,
      title: string,
      adCategoryID: string,
      adCategory:  {
        __typename: "AdCategory",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAdCategorySubscription = {
  onCreateAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdCategorySubscription = {
  onUpdateAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdCategorySubscription = {
  onDeleteAdCategory:  {
    __typename: "AdCategory",
    id: string,
    name: string,
    ads:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        title: string,
        adCategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdSubscription = {
  onCreateAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdSubscription = {
  onUpdateAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdSubscription = {
  onDeleteAd:  {
    __typename: "Ad",
    id: string,
    title: string,
    adCategoryID: string,
    adCategory:  {
      __typename: "AdCategory",
      id: string,
      name: string,
      ads:  {
        __typename: "ModelAdConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
