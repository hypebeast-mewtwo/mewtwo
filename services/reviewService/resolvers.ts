import db from './models/reviewModels';
import { QueryStrings, MutationStrings } from './SQLQueryStrings';
import { QueryArrayResult } from 'pg';

interface IReviewInput {
  reviewInput: {
    product_name: string;
    product_id: number;
    user_name: string;
    description: string;
    rating: number;
  };
}

export const resolvers = {
  Query: {
    getAllReviews: async () => {
      try {
        const { rows } = (await db.query(
          QueryStrings.GET_ALL_REVIEWS
        )) as unknown as QueryArrayResult;

        return rows;
      } catch (e) {
        throw new Error(
          `Error in getAllReviews Resolver: Unable to query reviews`
        );
      }
    },

    getReviewsByProductName: async (parent: any, args: {productName: string}) => {
      try {
        const { productName } = args
        const { rows } = (await db.query(
          QueryStrings.GET_REVIEWS_BY_PRODUCT_NAME, [ productName ]
        )) as unknown as QueryArrayResult;

        return rows;
      } catch (e) {
        throw new Error(
          `Error in getAllReviews Resolver: Unable to query reviews`
        );
      }
    },

    getReviewsByProductId: async (parent: any, args: {productId: number}) => {
      try {
        const { productId } = args
        const { rows } = (await db.query(
          QueryStrings.GET_REVIEWS_BY_PRODUCT_ID, [ productId.toString() ]
        )) as unknown as QueryArrayResult;

        return rows;
      } catch (e) {
        throw new Error(
          `Error in getAllReviews Resolver: Unable to query reviews`
        );
      }
    },
  },

  Mutation: {
    addReview: async (parent: unknown, { reviewInput }: IReviewInput) => {
      try {
        const { product_name, product_id, user_name, description, rating } =
          reviewInput;

        const values = [
          product_name,
          product_id.toString(),
          user_name,
          description,
          rating.toString(),
        ];

        const { rows } = (await db.query(
          MutationStrings.ADD_REVIEW,
          values
        )) as unknown as QueryArrayResult;

        return rows[0];
      } catch (e) {
        console.error(e);
      }
    },
  },
};
