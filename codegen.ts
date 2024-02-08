import { GRAPHQL_URL } from "./src/config/constants";
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [
        {
          add: { content: "import { GraphQLBigInt } from './types'" }, // use the 'add' plugin to add GraphQLBigInt import
        },
      ],
      config: {
        scalars: {
          // Map BigInt graphql Scalar to GraphQLBigInt
          BigInt: {
            input: "string",
            output: "GraphQLBigInt",
          },
        },
      },
    },
  },
};

export default config;
