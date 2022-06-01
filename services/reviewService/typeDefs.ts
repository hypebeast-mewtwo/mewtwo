import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    helloWorld: String!
    getAllReviews: [Review]!
    getReviewsByProductName(productName: String!): [Review]!
    getReviewsByProductId(productId: Int!): [Review]!
  }

  type Mutation {
    addReview(reviewInput: ReviewInput!): Review!
  }

  type Review {
    product_name: String!
    product_id: Int!
    user_name: String!
    description: String!
    rating: Int!
  }

  input ReviewInput {
    product_name: String!
    product_id: Int!
    user_name: String!
    description: String!
    rating: Int!
  }
`;
