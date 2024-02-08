/**
 * Represents a bigint returned by the GraphQL API as a string.
 */
export type GraphQLBigInt = string & {}; // & {} is a hack to make TypeScript treat this as a distinct type from string
