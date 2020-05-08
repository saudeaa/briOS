// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update

import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Post = {
  __typename?: 'Post'
  canonical_url?: Maybe<Scalars['String']>
  codeinjection_foot?: Maybe<Scalars['String']>
  codeinjection_head?: Maybe<Scalars['String']>
  comment_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  custom_excerpt?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  feature_image?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  html?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  meta_description?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  og_description?: Maybe<Scalars['String']>
  og_image?: Maybe<Scalars['String']>
  og_title?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['String']>
  reading_time?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  twitter_description?: Maybe<Scalars['String']>
  twitter_image?: Maybe<Scalars['String']>
  twitter_title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  uuid?: Maybe<Scalars['String']>
  visibility?: Maybe<Scalars['String']>
}

export type Bookmark = {
  __typename?: 'Bookmark'
  id?: Maybe<Scalars['String']>
  url: Scalars['String']
  author?: Maybe<Scalars['String']>
  creator?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  site_name?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  host?: Maybe<Scalars['String']>
  reactions?: Maybe<Scalars['Int']>
}

export type Episode = {
  __typename?: 'Episode'
  id?: Maybe<Scalars['Int']>
  number?: Maybe<Scalars['Int']>
  podcast_id?: Maybe<Scalars['Int']>
  guide?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Int']>
  explicit?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  long_description?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  published_at?: Maybe<Scalars['String']>
  audio_file_size?: Maybe<Scalars['Int']>
  audio_url?: Maybe<Scalars['String']>
  sharing_url?: Maybe<Scalars['String']>
}

export type Repo = {
  __typename?: 'Repo'
  org?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  stars?: Maybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  bookmarks: Array<Maybe<Bookmark>>
  episodes: Array<Maybe<Episode>>
  posts: Array<Maybe<Post>>
  post?: Maybe<Post>
  repos: Array<Maybe<Repo>>
  isMe?: Maybe<Scalars['Boolean']>
}

export type QueryPostsArgs = {
  first?: Maybe<Scalars['Int']>
}

export type QueryPostArgs = {
  slug: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  login?: Maybe<Scalars['Boolean']>
  logout?: Maybe<Scalars['Boolean']>
  addBookmark?: Maybe<Bookmark>
  editBookmark?: Maybe<Bookmark>
  deleteBookmark?: Maybe<Scalars['Boolean']>
  addBookmarkReaction?: Maybe<Bookmark>
}

export type MutationLoginArgs = {
  password: Scalars['String']
}

export type MutationAddBookmarkArgs = {
  url: Scalars['String']
}

export type MutationEditBookmarkArgs = {
  id: Scalars['ID']
  title: Scalars['String']
}

export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']
}

export type MutationAddBookmarkReactionArgs = {
  id: Scalars['ID']
}

export type BookmarkInfoFragment = {
  __typename?: 'Bookmark'
  id?: Maybe<string>
  title?: Maybe<string>
  url: string
  host?: Maybe<string>
  reactions?: Maybe<number>
}

export type EpisodeInfoFragment = {
  __typename?: 'Episode'
  id?: Maybe<number>
  title?: Maybe<string>
  description?: Maybe<string>
  published_at?: Maybe<string>
}

export type PostInfoFragment = {
  __typename?: 'Post'
  id?: Maybe<string>
  title?: Maybe<string>
  slug?: Maybe<string>
  updated_at?: Maybe<string>
  excerpt?: Maybe<string>
  feature_image?: Maybe<string>
  html?: Maybe<string>
}

export type RepoInfoFragment = {
  __typename?: 'Repo'
  org?: Maybe<string>
  name?: Maybe<string>
  description?: Maybe<string>
  stars?: Maybe<number>
}

export type LoginMutationVariables = {
  password: Scalars['String']
}

export type LoginMutation = { __typename?: 'Mutation'; login?: Maybe<boolean> }

export type LogoutMutationVariables = {}

export type LogoutMutation = {
  __typename?: 'Mutation'
  logout?: Maybe<boolean>
}

export type EditBookmarkMutationVariables = {
  id: Scalars['ID']
  title: Scalars['String']
}

export type EditBookmarkMutation = {
  __typename?: 'Mutation'
  editBookmark?: Maybe<{ __typename?: 'Bookmark' } & BookmarkInfoFragment>
}

export type DeleteBookmarkMutationVariables = {
  id: Scalars['ID']
}

export type DeleteBookmarkMutation = {
  __typename?: 'Mutation'
  deleteBookmark?: Maybe<boolean>
}

export type AddBookmarkMutationVariables = {
  url: Scalars['String']
}

export type AddBookmarkMutation = {
  __typename?: 'Mutation'
  addBookmark?: Maybe<{ __typename?: 'Bookmark' } & BookmarkInfoFragment>
}

export type AddBookmarkReactionMutationVariables = {
  id: Scalars['ID']
}

export type AddBookmarkReactionMutation = {
  __typename?: 'Mutation'
  addBookmarkReaction?: Maybe<
    { __typename?: 'Bookmark' } & BookmarkInfoFragment
  >
}

export type GetBookmarksQueryVariables = {}

export type GetBookmarksQuery = {
  __typename?: 'Query'
  bookmarks: Array<Maybe<{ __typename?: 'Bookmark' } & BookmarkInfoFragment>>
}

export type GetEpisodesQueryVariables = {}

export type GetEpisodesQuery = {
  __typename?: 'Query'
  episodes: Array<Maybe<{ __typename?: 'Episode' } & EpisodeInfoFragment>>
}

export type GetHomeQueryVariables = {}

export type GetHomeQuery = {
  __typename?: 'Query'
  posts: Array<Maybe<{ __typename?: 'Post' } & PostInfoFragment>>
  episodes: Array<Maybe<{ __typename?: 'Episode' } & EpisodeInfoFragment>>
}

export type IsMeQueryVariables = {}

export type IsMeQuery = { __typename?: 'Query'; isMe?: Maybe<boolean> }

export type GetPostsQueryVariables = {}

export type GetPostsQuery = {
  __typename?: 'Query'
  posts: Array<Maybe<{ __typename?: 'Post' } & PostInfoFragment>>
}

export type GetPostQueryVariables = {
  slug: Scalars['String']
  first?: Maybe<Scalars['Int']>
}

export type GetPostQuery = {
  __typename?: 'Query'
  post?: Maybe<{ __typename?: 'Post' } & PostInfoFragment>
  posts: Array<Maybe<{ __typename?: 'Post' } & PostInfoFragment>>
}

export const BookmarkInfoFragmentDoc = gql`
  fragment BookmarkInfo on Bookmark {
    id
    title
    url
    host
    reactions
  }
`
export const EpisodeInfoFragmentDoc = gql`
  fragment EpisodeInfo on Episode {
    id
    title
    description
    published_at
  }
`
export const PostInfoFragmentDoc = gql`
  fragment PostInfo on Post {
    id
    title
    slug
    updated_at
    excerpt
    feature_image
    html
  }
`
export const RepoInfoFragmentDoc = gql`
  fragment RepoInfo on Repo {
    org
    name
    description
    stars
  }
`
export const LoginDocument = gql`
  mutation login($password: String!) {
    login(password: $password)
  }
`
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = ApolloReactCommon.MutationResult<
  LoginMutation
>
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    baseOptions
  )
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = ApolloReactCommon.MutationResult<
  LogoutMutation
>
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const EditBookmarkDocument = gql`
  mutation editBookmark($id: ID!, $title: String!) {
    editBookmark(id: $id, title: $title) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`
export type EditBookmarkMutationFn = ApolloReactCommon.MutationFunction<
  EditBookmarkMutation,
  EditBookmarkMutationVariables
>

/**
 * __useEditBookmarkMutation__
 *
 * To run a mutation, you first call `useEditBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBookmarkMutation, { data, loading, error }] = useEditBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useEditBookmarkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    EditBookmarkMutation,
    EditBookmarkMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    EditBookmarkMutation,
    EditBookmarkMutationVariables
  >(EditBookmarkDocument, baseOptions)
}
export type EditBookmarkMutationHookResult = ReturnType<
  typeof useEditBookmarkMutation
>
export type EditBookmarkMutationResult = ApolloReactCommon.MutationResult<
  EditBookmarkMutation
>
export type EditBookmarkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditBookmarkMutation,
  EditBookmarkMutationVariables
>
export const DeleteBookmarkDocument = gql`
  mutation deleteBookmark($id: ID!) {
    deleteBookmark(id: $id)
  }
`
export type DeleteBookmarkMutationFn = ApolloReactCommon.MutationFunction<
  DeleteBookmarkMutation,
  DeleteBookmarkMutationVariables
>

/**
 * __useDeleteBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkMutation, { data, loading, error }] = useDeleteBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookmarkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteBookmarkMutation,
    DeleteBookmarkMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteBookmarkMutation,
    DeleteBookmarkMutationVariables
  >(DeleteBookmarkDocument, baseOptions)
}
export type DeleteBookmarkMutationHookResult = ReturnType<
  typeof useDeleteBookmarkMutation
>
export type DeleteBookmarkMutationResult = ApolloReactCommon.MutationResult<
  DeleteBookmarkMutation
>
export type DeleteBookmarkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteBookmarkMutation,
  DeleteBookmarkMutationVariables
>
export const AddBookmarkDocument = gql`
  mutation addBookmark($url: String!) {
    addBookmark(url: $url) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`
export type AddBookmarkMutationFn = ApolloReactCommon.MutationFunction<
  AddBookmarkMutation,
  AddBookmarkMutationVariables
>

/**
 * __useAddBookmarkMutation__
 *
 * To run a mutation, you first call `useAddBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookmarkMutation, { data, loading, error }] = useAddBookmarkMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddBookmarkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddBookmarkMutation,
    AddBookmarkMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddBookmarkMutation,
    AddBookmarkMutationVariables
  >(AddBookmarkDocument, baseOptions)
}
export type AddBookmarkMutationHookResult = ReturnType<
  typeof useAddBookmarkMutation
>
export type AddBookmarkMutationResult = ApolloReactCommon.MutationResult<
  AddBookmarkMutation
>
export type AddBookmarkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddBookmarkMutation,
  AddBookmarkMutationVariables
>
export const AddBookmarkReactionDocument = gql`
  mutation addBookmarkReaction($id: ID!) {
    addBookmarkReaction(id: $id) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`
export type AddBookmarkReactionMutationFn = ApolloReactCommon.MutationFunction<
  AddBookmarkReactionMutation,
  AddBookmarkReactionMutationVariables
>

/**
 * __useAddBookmarkReactionMutation__
 *
 * To run a mutation, you first call `useAddBookmarkReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookmarkReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookmarkReactionMutation, { data, loading, error }] = useAddBookmarkReactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddBookmarkReactionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddBookmarkReactionMutation,
    AddBookmarkReactionMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddBookmarkReactionMutation,
    AddBookmarkReactionMutationVariables
  >(AddBookmarkReactionDocument, baseOptions)
}
export type AddBookmarkReactionMutationHookResult = ReturnType<
  typeof useAddBookmarkReactionMutation
>
export type AddBookmarkReactionMutationResult = ApolloReactCommon.MutationResult<
  AddBookmarkReactionMutation
>
export type AddBookmarkReactionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddBookmarkReactionMutation,
  AddBookmarkReactionMutationVariables
>
export const GetBookmarksDocument = gql`
  query GetBookmarks {
    bookmarks {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`

/**
 * __useGetBookmarksQuery__
 *
 * To run a query within a React component, call `useGetBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBookmarksQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >(GetBookmarksDocument, baseOptions)
}
export function useGetBookmarksLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >(GetBookmarksDocument, baseOptions)
}
export type GetBookmarksQueryHookResult = ReturnType<
  typeof useGetBookmarksQuery
>
export type GetBookmarksLazyQueryHookResult = ReturnType<
  typeof useGetBookmarksLazyQuery
>
export type GetBookmarksQueryResult = ApolloReactCommon.QueryResult<
  GetBookmarksQuery,
  GetBookmarksQueryVariables
>
export const GetEpisodesDocument = gql`
  query GetEpisodes {
    episodes {
      ...EpisodeInfo
    }
  }
  ${EpisodeInfoFragmentDoc}
`

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEpisodesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    baseOptions
  )
}
export function useGetEpisodesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >(GetEpisodesDocument, baseOptions)
}
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>
export type GetEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesLazyQuery
>
export type GetEpisodesQueryResult = ApolloReactCommon.QueryResult<
  GetEpisodesQuery,
  GetEpisodesQueryVariables
>
export const GetHomeDocument = gql`
  query GetHome {
    posts(first: 5) {
      ...PostInfo
    }
    episodes {
      ...EpisodeInfo
    }
  }
  ${PostInfoFragmentDoc}
  ${EpisodeInfoFragmentDoc}
`

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetHomeQuery,
    GetHomeQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetHomeQuery, GetHomeQueryVariables>(
    GetHomeDocument,
    baseOptions
  )
}
export function useGetHomeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetHomeQuery,
    GetHomeQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(
    GetHomeDocument,
    baseOptions
  )
}
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>
export type GetHomeQueryResult = ApolloReactCommon.QueryResult<
  GetHomeQuery,
  GetHomeQueryVariables
>
export const IsMeDocument = gql`
  query IsMe {
    isMe
  }
`

/**
 * __useIsMeQuery__
 *
 * To run a query within a React component, call `useIsMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<IsMeQuery, IsMeQueryVariables>
) {
  return ApolloReactHooks.useQuery<IsMeQuery, IsMeQueryVariables>(
    IsMeDocument,
    baseOptions
  )
}
export function useIsMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IsMeQuery,
    IsMeQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<IsMeQuery, IsMeQueryVariables>(
    IsMeDocument,
    baseOptions
  )
}
export type IsMeQueryHookResult = ReturnType<typeof useIsMeQuery>
export type IsMeLazyQueryHookResult = ReturnType<typeof useIsMeLazyQuery>
export type IsMeQueryResult = ApolloReactCommon.QueryResult<
  IsMeQuery,
  IsMeQueryVariables
>
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  )
}
export function useGetPostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  )
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>
export type GetPostsQueryResult = ApolloReactCommon.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>
export const GetPostDocument = gql`
  query GetPost($slug: String!, $first: Int) {
    post(slug: $slug) {
      ...PostInfo
    }
    posts(first: $first) {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  )
}
export function useGetPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  )
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>
export type GetPostQueryResult = ApolloReactCommon.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>
