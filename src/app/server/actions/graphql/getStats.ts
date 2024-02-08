import { GRAPHQL_URL } from "@/config/constants";
import { request } from "graphql-request";
import { graphql } from "@/gql";

export const getStats = async () => {
  const query = graphql(`
    query GetStats {
      stats {
        healBurned
        instantUnwrapBurned
        totalBurned
        id
      }
    }
  `);
  const response = await request(GRAPHQL_URL, query);
  response.stats[0].healBurned;

  return response;
};
