import db from './models/reviewModels';
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
          `SELECT * FROM REVIEWS;`
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
        console.log(reviewInput);
        const { product_name, product_id, user_name, description, rating } =
          reviewInput;
        const values = [
          product_name,
          product_id.toString(),
          user_name,
          description,
          rating.toString(),
        ];

        console.log('these are the values', values);
        const { rows } = (await db.query(
          `INSERT INTO reviews(product_name, product_id, user_name, description, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
          values
        )) as unknown as QueryArrayResult;
        return rows[0];
      } catch (e) {
        console.error(e);
      }
    },
  },
};
