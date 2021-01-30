import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};









export type Query = {
  __typename?: 'Query';
  getAdCategory?: Maybe<AdCategory>;
  listAdCategorys?: Maybe<ModelAdCategoryConnection>;
  getAd?: Maybe<Ad>;
  listAds?: Maybe<ModelAdConnection>;
};


export type QueryGetAdCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryListAdCategorysArgs = {
  filter?: Maybe<ModelAdCategoryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetAdArgs = {
  id: Scalars['ID'];
};


export type QueryListAdsArgs = {
  filter?: Maybe<ModelAdFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type AdCategory = {
  __typename?: 'AdCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  ads?: Maybe<ModelAdConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type AdCategoryAdsArgs = {
  filter?: Maybe<ModelAdFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAdConnection = {
  __typename?: 'ModelAdConnection';
  items?: Maybe<Array<Maybe<Ad>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Ad = {
  __typename?: 'Ad';
  id: Scalars['ID'];
  title: Scalars['String'];
  adCategoryID: Scalars['ID'];
  adCategory?: Maybe<AdCategory>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type ModelAdFilterInput = {
  id?: Maybe<ModelIdInput>;
  title?: Maybe<ModelStringInput>;
  adCategoryID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelAdFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelAdFilterInput>>>;
  not?: Maybe<ModelAdFilterInput>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelAdCategoryConnection = {
  __typename?: 'ModelAdCategoryConnection';
  items?: Maybe<Array<Maybe<AdCategory>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAdCategoryFilterInput = {
  id?: Maybe<ModelIdInput>;
  name?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelAdCategoryFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelAdCategoryFilterInput>>>;
  not?: Maybe<ModelAdCategoryFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdCategory?: Maybe<AdCategory>;
  updateAdCategory?: Maybe<AdCategory>;
  deleteAdCategory?: Maybe<AdCategory>;
  createAd?: Maybe<Ad>;
  updateAd?: Maybe<Ad>;
  deleteAd?: Maybe<Ad>;
};


export type MutationCreateAdCategoryArgs = {
  input: CreateAdCategoryInput;
  condition?: Maybe<ModelAdCategoryConditionInput>;
};


export type MutationUpdateAdCategoryArgs = {
  input: UpdateAdCategoryInput;
  condition?: Maybe<ModelAdCategoryConditionInput>;
};


export type MutationDeleteAdCategoryArgs = {
  input: DeleteAdCategoryInput;
  condition?: Maybe<ModelAdCategoryConditionInput>;
};


export type MutationCreateAdArgs = {
  input: CreateAdInput;
  condition?: Maybe<ModelAdConditionInput>;
};


export type MutationUpdateAdArgs = {
  input: UpdateAdInput;
  condition?: Maybe<ModelAdConditionInput>;
};


export type MutationDeleteAdArgs = {
  input: DeleteAdInput;
  condition?: Maybe<ModelAdConditionInput>;
};

export type CreateAdCategoryInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type ModelAdCategoryConditionInput = {
  name?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelAdCategoryConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelAdCategoryConditionInput>>>;
  not?: Maybe<ModelAdCategoryConditionInput>;
};

export type UpdateAdCategoryInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type DeleteAdCategoryInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateAdInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  adCategoryID: Scalars['ID'];
};

export type ModelAdConditionInput = {
  title?: Maybe<ModelStringInput>;
  adCategoryID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelAdConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelAdConditionInput>>>;
  not?: Maybe<ModelAdConditionInput>;
};

export type UpdateAdInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  adCategoryID?: Maybe<Scalars['ID']>;
};

export type DeleteAdInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAdCategory?: Maybe<AdCategory>;
  onUpdateAdCategory?: Maybe<AdCategory>;
  onDeleteAdCategory?: Maybe<AdCategory>;
  onCreateAd?: Maybe<Ad>;
  onUpdateAd?: Maybe<Ad>;
  onDeleteAd?: Maybe<Ad>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type CreateAdCategoryMutationVariables = Exact<{
  input: CreateAdCategoryInput;
  condition?: Maybe<ModelAdCategoryConditionInput>;
}>;


export type CreateAdCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type UpdateAdCategoryMutationVariables = Exact<{
  input: UpdateAdCategoryInput;
  condition?: Maybe<ModelAdCategoryConditionInput>;
}>;


export type UpdateAdCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type DeleteAdCategoryMutationVariables = Exact<{
  input: DeleteAdCategoryInput;
  condition?: Maybe<ModelAdCategoryConditionInput>;
}>;


export type DeleteAdCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type CreateAdMutationVariables = Exact<{
  input: CreateAdInput;
  condition?: Maybe<ModelAdConditionInput>;
}>;


export type CreateAdMutation = (
  { __typename?: 'Mutation' }
  & { createAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type UpdateAdMutationVariables = Exact<{
  input: UpdateAdInput;
  condition?: Maybe<ModelAdConditionInput>;
}>;


export type UpdateAdMutation = (
  { __typename?: 'Mutation' }
  & { updateAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type DeleteAdMutationVariables = Exact<{
  input: DeleteAdInput;
  condition?: Maybe<ModelAdConditionInput>;
}>;


export type DeleteAdMutation = (
  { __typename?: 'Mutation' }
  & { deleteAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type GetAdCategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAdCategoryQuery = (
  { __typename?: 'Query' }
  & { getAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type ListAdCategorysQueryVariables = Exact<{
  filter?: Maybe<ModelAdCategoryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListAdCategorysQuery = (
  { __typename?: 'Query' }
  & { listAdCategorys?: Maybe<(
    { __typename?: 'ModelAdCategoryConnection' }
    & Pick<ModelAdCategoryConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )>>> }
  )> }
);

export type GetAdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAdQuery = (
  { __typename?: 'Query' }
  & { getAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type ListAdsQueryVariables = Exact<{
  filter?: Maybe<ModelAdFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListAdsQuery = (
  { __typename?: 'Query' }
  & { listAds?: Maybe<(
    { __typename?: 'ModelAdConnection' }
    & Pick<ModelAdConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Ad' }
      & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      & { adCategory?: Maybe<(
        { __typename?: 'AdCategory' }
        & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      )> }
    )>>> }
  )> }
);

export type OnCreateAdCategorySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateAdCategorySubscription = (
  { __typename?: 'Subscription' }
  & { onCreateAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnUpdateAdCategorySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateAdCategorySubscription = (
  { __typename?: 'Subscription' }
  & { onUpdateAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnDeleteAdCategorySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteAdCategorySubscription = (
  { __typename?: 'Subscription' }
  & { onDeleteAdCategory?: Maybe<(
    { __typename?: 'AdCategory' }
    & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { ads?: Maybe<(
      { __typename?: 'ModelAdConnection' }
      & Pick<ModelAdConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnCreateAdSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateAdSubscription = (
  { __typename?: 'Subscription' }
  & { onCreateAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type OnUpdateAdSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateAdSubscription = (
  { __typename?: 'Subscription' }
  & { onUpdateAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type OnDeleteAdSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteAdSubscription = (
  { __typename?: 'Subscription' }
  & { onDeleteAd?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'adCategoryID' | 'createdAt' | 'updatedAt'>
    & { adCategory?: Maybe<(
      { __typename?: 'AdCategory' }
      & Pick<AdCategory, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { ads?: Maybe<(
        { __typename?: 'ModelAdConnection' }
        & Pick<ModelAdConnection, 'nextToken'>
      )> }
    )> }
  )> }
);


export const CreateAdCategoryDocument = gql`
    mutation CreateAdCategory($input: CreateAdCategoryInput!, $condition: ModelAdCategoryConditionInput) {
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
    createdAt
    updatedAt
  }
}
    `;
export type CreateAdCategoryMutationFn = Apollo.MutationFunction<CreateAdCategoryMutation, CreateAdCategoryMutationVariables>;

/**
 * __useCreateAdCategoryMutation__
 *
 * To run a mutation, you first call `useCreateAdCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdCategoryMutation, { data, loading, error }] = useCreateAdCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateAdCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdCategoryMutation, CreateAdCategoryMutationVariables>) {
        return Apollo.useMutation<CreateAdCategoryMutation, CreateAdCategoryMutationVariables>(CreateAdCategoryDocument, baseOptions);
      }
export type CreateAdCategoryMutationHookResult = ReturnType<typeof useCreateAdCategoryMutation>;
export type CreateAdCategoryMutationResult = Apollo.MutationResult<CreateAdCategoryMutation>;
export type CreateAdCategoryMutationOptions = Apollo.BaseMutationOptions<CreateAdCategoryMutation, CreateAdCategoryMutationVariables>;
export const UpdateAdCategoryDocument = gql`
    mutation UpdateAdCategory($input: UpdateAdCategoryInput!, $condition: ModelAdCategoryConditionInput) {
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
    createdAt
    updatedAt
  }
}
    `;
export type UpdateAdCategoryMutationFn = Apollo.MutationFunction<UpdateAdCategoryMutation, UpdateAdCategoryMutationVariables>;

/**
 * __useUpdateAdCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateAdCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdCategoryMutation, { data, loading, error }] = useUpdateAdCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateAdCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdCategoryMutation, UpdateAdCategoryMutationVariables>) {
        return Apollo.useMutation<UpdateAdCategoryMutation, UpdateAdCategoryMutationVariables>(UpdateAdCategoryDocument, baseOptions);
      }
export type UpdateAdCategoryMutationHookResult = ReturnType<typeof useUpdateAdCategoryMutation>;
export type UpdateAdCategoryMutationResult = Apollo.MutationResult<UpdateAdCategoryMutation>;
export type UpdateAdCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateAdCategoryMutation, UpdateAdCategoryMutationVariables>;
export const DeleteAdCategoryDocument = gql`
    mutation DeleteAdCategory($input: DeleteAdCategoryInput!, $condition: ModelAdCategoryConditionInput) {
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
    createdAt
    updatedAt
  }
}
    `;
export type DeleteAdCategoryMutationFn = Apollo.MutationFunction<DeleteAdCategoryMutation, DeleteAdCategoryMutationVariables>;

/**
 * __useDeleteAdCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteAdCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdCategoryMutation, { data, loading, error }] = useDeleteAdCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteAdCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdCategoryMutation, DeleteAdCategoryMutationVariables>) {
        return Apollo.useMutation<DeleteAdCategoryMutation, DeleteAdCategoryMutationVariables>(DeleteAdCategoryDocument, baseOptions);
      }
export type DeleteAdCategoryMutationHookResult = ReturnType<typeof useDeleteAdCategoryMutation>;
export type DeleteAdCategoryMutationResult = Apollo.MutationResult<DeleteAdCategoryMutation>;
export type DeleteAdCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteAdCategoryMutation, DeleteAdCategoryMutationVariables>;
export const CreateAdDocument = gql`
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
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type CreateAdMutationFn = Apollo.MutationFunction<CreateAdMutation, CreateAdMutationVariables>;

/**
 * __useCreateAdMutation__
 *
 * To run a mutation, you first call `useCreateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdMutation, { data, loading, error }] = useCreateAdMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdMutation, CreateAdMutationVariables>) {
        return Apollo.useMutation<CreateAdMutation, CreateAdMutationVariables>(CreateAdDocument, baseOptions);
      }
export type CreateAdMutationHookResult = ReturnType<typeof useCreateAdMutation>;
export type CreateAdMutationResult = Apollo.MutationResult<CreateAdMutation>;
export type CreateAdMutationOptions = Apollo.BaseMutationOptions<CreateAdMutation, CreateAdMutationVariables>;
export const UpdateAdDocument = gql`
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
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type UpdateAdMutationFn = Apollo.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>;

/**
 * __useUpdateAdMutation__
 *
 * To run a mutation, you first call `useUpdateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdMutation, { data, loading, error }] = useUpdateAdMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateAdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdMutation, UpdateAdMutationVariables>) {
        return Apollo.useMutation<UpdateAdMutation, UpdateAdMutationVariables>(UpdateAdDocument, baseOptions);
      }
export type UpdateAdMutationHookResult = ReturnType<typeof useUpdateAdMutation>;
export type UpdateAdMutationResult = Apollo.MutationResult<UpdateAdMutation>;
export type UpdateAdMutationOptions = Apollo.BaseMutationOptions<UpdateAdMutation, UpdateAdMutationVariables>;
export const DeleteAdDocument = gql`
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
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, baseOptions);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const GetAdCategoryDocument = gql`
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

/**
 * __useGetAdCategoryQuery__
 *
 * To run a query within a React component, call `useGetAdCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetAdCategoryQuery, GetAdCategoryQueryVariables>) {
        return Apollo.useQuery<GetAdCategoryQuery, GetAdCategoryQueryVariables>(GetAdCategoryDocument, baseOptions);
      }
export function useGetAdCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdCategoryQuery, GetAdCategoryQueryVariables>) {
          return Apollo.useLazyQuery<GetAdCategoryQuery, GetAdCategoryQueryVariables>(GetAdCategoryDocument, baseOptions);
        }
export type GetAdCategoryQueryHookResult = ReturnType<typeof useGetAdCategoryQuery>;
export type GetAdCategoryLazyQueryHookResult = ReturnType<typeof useGetAdCategoryLazyQuery>;
export type GetAdCategoryQueryResult = Apollo.QueryResult<GetAdCategoryQuery, GetAdCategoryQueryVariables>;
export const ListAdCategorysDocument = gql`
    query ListAdCategorys($filter: ModelAdCategoryFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * __useListAdCategorysQuery__
 *
 * To run a query within a React component, call `useListAdCategorysQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdCategorysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdCategorysQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListAdCategorysQuery(baseOptions?: Apollo.QueryHookOptions<ListAdCategorysQuery, ListAdCategorysQueryVariables>) {
        return Apollo.useQuery<ListAdCategorysQuery, ListAdCategorysQueryVariables>(ListAdCategorysDocument, baseOptions);
      }
export function useListAdCategorysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdCategorysQuery, ListAdCategorysQueryVariables>) {
          return Apollo.useLazyQuery<ListAdCategorysQuery, ListAdCategorysQueryVariables>(ListAdCategorysDocument, baseOptions);
        }
export type ListAdCategorysQueryHookResult = ReturnType<typeof useListAdCategorysQuery>;
export type ListAdCategorysLazyQueryHookResult = ReturnType<typeof useListAdCategorysLazyQuery>;
export type ListAdCategorysQueryResult = Apollo.QueryResult<ListAdCategorysQuery, ListAdCategorysQueryVariables>;
export const GetAdDocument = gql`
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

/**
 * __useGetAdQuery__
 *
 * To run a query within a React component, call `useGetAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdQuery(baseOptions: Apollo.QueryHookOptions<GetAdQuery, GetAdQueryVariables>) {
        return Apollo.useQuery<GetAdQuery, GetAdQueryVariables>(GetAdDocument, baseOptions);
      }
export function useGetAdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdQuery, GetAdQueryVariables>) {
          return Apollo.useLazyQuery<GetAdQuery, GetAdQueryVariables>(GetAdDocument, baseOptions);
        }
export type GetAdQueryHookResult = ReturnType<typeof useGetAdQuery>;
export type GetAdLazyQueryHookResult = ReturnType<typeof useGetAdLazyQuery>;
export type GetAdQueryResult = Apollo.QueryResult<GetAdQuery, GetAdQueryVariables>;
export const ListAdsDocument = gql`
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

/**
 * __useListAdsQuery__
 *
 * To run a query within a React component, call `useListAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListAdsQuery(baseOptions?: Apollo.QueryHookOptions<ListAdsQuery, ListAdsQueryVariables>) {
        return Apollo.useQuery<ListAdsQuery, ListAdsQueryVariables>(ListAdsDocument, baseOptions);
      }
export function useListAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdsQuery, ListAdsQueryVariables>) {
          return Apollo.useLazyQuery<ListAdsQuery, ListAdsQueryVariables>(ListAdsDocument, baseOptions);
        }
export type ListAdsQueryHookResult = ReturnType<typeof useListAdsQuery>;
export type ListAdsLazyQueryHookResult = ReturnType<typeof useListAdsLazyQuery>;
export type ListAdsQueryResult = Apollo.QueryResult<ListAdsQuery, ListAdsQueryVariables>;
export const OnCreateAdCategoryDocument = gql`
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

/**
 * __useOnCreateAdCategorySubscription__
 *
 * To run a query within a React component, call `useOnCreateAdCategorySubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateAdCategorySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateAdCategorySubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateAdCategorySubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateAdCategorySubscription, OnCreateAdCategorySubscriptionVariables>) {
        return Apollo.useSubscription<OnCreateAdCategorySubscription, OnCreateAdCategorySubscriptionVariables>(OnCreateAdCategoryDocument, baseOptions);
      }
export type OnCreateAdCategorySubscriptionHookResult = ReturnType<typeof useOnCreateAdCategorySubscription>;
export type OnCreateAdCategorySubscriptionResult = Apollo.SubscriptionResult<OnCreateAdCategorySubscription>;
export const OnUpdateAdCategoryDocument = gql`
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

/**
 * __useOnUpdateAdCategorySubscription__
 *
 * To run a query within a React component, call `useOnUpdateAdCategorySubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateAdCategorySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateAdCategorySubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateAdCategorySubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateAdCategorySubscription, OnUpdateAdCategorySubscriptionVariables>) {
        return Apollo.useSubscription<OnUpdateAdCategorySubscription, OnUpdateAdCategorySubscriptionVariables>(OnUpdateAdCategoryDocument, baseOptions);
      }
export type OnUpdateAdCategorySubscriptionHookResult = ReturnType<typeof useOnUpdateAdCategorySubscription>;
export type OnUpdateAdCategorySubscriptionResult = Apollo.SubscriptionResult<OnUpdateAdCategorySubscription>;
export const OnDeleteAdCategoryDocument = gql`
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

/**
 * __useOnDeleteAdCategorySubscription__
 *
 * To run a query within a React component, call `useOnDeleteAdCategorySubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteAdCategorySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteAdCategorySubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteAdCategorySubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteAdCategorySubscription, OnDeleteAdCategorySubscriptionVariables>) {
        return Apollo.useSubscription<OnDeleteAdCategorySubscription, OnDeleteAdCategorySubscriptionVariables>(OnDeleteAdCategoryDocument, baseOptions);
      }
export type OnDeleteAdCategorySubscriptionHookResult = ReturnType<typeof useOnDeleteAdCategorySubscription>;
export type OnDeleteAdCategorySubscriptionResult = Apollo.SubscriptionResult<OnDeleteAdCategorySubscription>;
export const OnCreateAdDocument = gql`
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

/**
 * __useOnCreateAdSubscription__
 *
 * To run a query within a React component, call `useOnCreateAdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateAdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateAdSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateAdSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateAdSubscription, OnCreateAdSubscriptionVariables>) {
        return Apollo.useSubscription<OnCreateAdSubscription, OnCreateAdSubscriptionVariables>(OnCreateAdDocument, baseOptions);
      }
export type OnCreateAdSubscriptionHookResult = ReturnType<typeof useOnCreateAdSubscription>;
export type OnCreateAdSubscriptionResult = Apollo.SubscriptionResult<OnCreateAdSubscription>;
export const OnUpdateAdDocument = gql`
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

/**
 * __useOnUpdateAdSubscription__
 *
 * To run a query within a React component, call `useOnUpdateAdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateAdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateAdSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateAdSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateAdSubscription, OnUpdateAdSubscriptionVariables>) {
        return Apollo.useSubscription<OnUpdateAdSubscription, OnUpdateAdSubscriptionVariables>(OnUpdateAdDocument, baseOptions);
      }
export type OnUpdateAdSubscriptionHookResult = ReturnType<typeof useOnUpdateAdSubscription>;
export type OnUpdateAdSubscriptionResult = Apollo.SubscriptionResult<OnUpdateAdSubscription>;
export const OnDeleteAdDocument = gql`
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

/**
 * __useOnDeleteAdSubscription__
 *
 * To run a query within a React component, call `useOnDeleteAdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteAdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteAdSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteAdSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteAdSubscription, OnDeleteAdSubscriptionVariables>) {
        return Apollo.useSubscription<OnDeleteAdSubscription, OnDeleteAdSubscriptionVariables>(OnDeleteAdDocument, baseOptions);
      }
export type OnDeleteAdSubscriptionHookResult = ReturnType<typeof useOnDeleteAdSubscription>;
export type OnDeleteAdSubscriptionResult = Apollo.SubscriptionResult<OnDeleteAdSubscription>;