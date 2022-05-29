export enum QueryStrings {
    GET_ALL_REVIEWS=`SELECT * FROM REVIEWS;`,
    GET_REVIEWS_BY_PRODUCT_NAME=`SELECT * FROM REVIEWS WHERE $1=product_name;`,
    GET_REVIEWS_BY_PRODUCT_ID=`SELECT * FROM REVIEWS WHERE $1=product_id;`
}

export enum MutationStrings {
    ADD_REVIEW=`INSERT INTO reviews(product_name, product_id, user_name, description, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *`
}