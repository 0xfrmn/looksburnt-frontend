/* eslint-disable */
import { GraphQLBigInt } from './types'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Big number integer */
  BigInt: { input: string; output: GraphQLBigInt; }
};

export type Burn = {
  __typename?: 'Burn';
  block: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  txHash: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
};

export type BurnEdge = {
  __typename?: 'BurnEdge';
  cursor: Scalars['String']['output'];
  node: Burn;
};

export enum BurnOrderByInput {
  BlockAsc = 'block_ASC',
  BlockAscNullsFirst = 'block_ASC_NULLS_FIRST',
  BlockDesc = 'block_DESC',
  BlockDescNullsLast = 'block_DESC_NULLS_LAST',
  FromAsc = 'from_ASC',
  FromAscNullsFirst = 'from_ASC_NULLS_FIRST',
  FromDesc = 'from_DESC',
  FromDescNullsLast = 'from_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  TxHashAsc = 'txHash_ASC',
  TxHashAscNullsFirst = 'txHash_ASC_NULLS_FIRST',
  TxHashDesc = 'txHash_DESC',
  TxHashDescNullsLast = 'txHash_DESC_NULLS_LAST',
  ValueAsc = 'value_ASC',
  ValueAscNullsFirst = 'value_ASC_NULLS_FIRST',
  ValueDesc = 'value_DESC',
  ValueDescNullsLast = 'value_DESC_NULLS_LAST'
}

export type BurnWhereInput = {
  AND?: InputMaybe<Array<BurnWhereInput>>;
  OR?: InputMaybe<Array<BurnWhereInput>>;
  block_eq?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not_eq?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  from_endsWith?: InputMaybe<Scalars['String']['input']>;
  from_eq?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  from_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  from_not_eq?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  from_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  txHash_endsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_eq?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  txHash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_not_eq?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_startsWith?: InputMaybe<Scalars['String']['input']>;
  value_eq?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BurnsConnection = {
  __typename?: 'BurnsConnection';
  edges: Array<BurnEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  burnById?: Maybe<Burn>;
  /** @deprecated Use burnById */
  burnByUniqueInput?: Maybe<Burn>;
  burns: Array<Burn>;
  burnsConnection: BurnsConnection;
  squidStatus?: Maybe<SquidStatus>;
  stats: Array<Stats>;
  statsById?: Maybe<Stats>;
  /** @deprecated Use statsById */
  statsByUniqueInput?: Maybe<Stats>;
  statsConnection: StatsConnection;
};


export type QueryBurnByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryBurnByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryBurnsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BurnOrderByInput>>;
  where?: InputMaybe<BurnWhereInput>;
};


export type QueryBurnsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<BurnOrderByInput>;
  where?: InputMaybe<BurnWhereInput>;
};


export type QueryStatsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StatsOrderByInput>>;
  where?: InputMaybe<StatsWhereInput>;
};


export type QueryStatsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStatsByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryStatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StatsOrderByInput>;
  where?: InputMaybe<StatsWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type Stats = {
  __typename?: 'Stats';
  healBurned: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  instantUnwrapBurned: Scalars['BigInt']['output'];
  totalBurned: Scalars['BigInt']['output'];
};

export type StatsConnection = {
  __typename?: 'StatsConnection';
  edges: Array<StatsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StatsEdge = {
  __typename?: 'StatsEdge';
  cursor: Scalars['String']['output'];
  node: Stats;
};

export enum StatsOrderByInput {
  HealBurnedAsc = 'healBurned_ASC',
  HealBurnedAscNullsFirst = 'healBurned_ASC_NULLS_FIRST',
  HealBurnedDesc = 'healBurned_DESC',
  HealBurnedDescNullsLast = 'healBurned_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  InstantUnwrapBurnedAsc = 'instantUnwrapBurned_ASC',
  InstantUnwrapBurnedAscNullsFirst = 'instantUnwrapBurned_ASC_NULLS_FIRST',
  InstantUnwrapBurnedDesc = 'instantUnwrapBurned_DESC',
  InstantUnwrapBurnedDescNullsLast = 'instantUnwrapBurned_DESC_NULLS_LAST',
  TotalBurnedAsc = 'totalBurned_ASC',
  TotalBurnedAscNullsFirst = 'totalBurned_ASC_NULLS_FIRST',
  TotalBurnedDesc = 'totalBurned_DESC',
  TotalBurnedDescNullsLast = 'totalBurned_DESC_NULLS_LAST'
}

export type StatsWhereInput = {
  AND?: InputMaybe<Array<StatsWhereInput>>;
  OR?: InputMaybe<Array<StatsWhereInput>>;
  healBurned_eq?: InputMaybe<Scalars['BigInt']['input']>;
  healBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  healBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  healBurned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  healBurned_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  healBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  healBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  healBurned_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  healBurned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  instantUnwrapBurned_eq?: InputMaybe<Scalars['BigInt']['input']>;
  instantUnwrapBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  instantUnwrapBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  instantUnwrapBurned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  instantUnwrapBurned_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  instantUnwrapBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  instantUnwrapBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  instantUnwrapBurned_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  instantUnwrapBurned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBurned_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBurned_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type GetStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatsQuery = { __typename?: 'Query', stats: Array<{ __typename?: 'Stats', healBurned: GraphQLBigInt, instantUnwrapBurned: GraphQLBigInt, totalBurned: GraphQLBigInt, id: string }> };


export const GetStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"healBurned"}},{"kind":"Field","name":{"kind":"Name","value":"instantUnwrapBurned"}},{"kind":"Field","name":{"kind":"Name","value":"totalBurned"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetStatsQuery, GetStatsQueryVariables>;