export enum QueryStrings {
    GET_ALL_REVIEWS=`SELECT * FROM REVIEWS;`
}

export enum MutationStrings {
    ADD_REVIEW=`INSERT INTO reviews(product_name, product_id, user_name, description, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *`
}