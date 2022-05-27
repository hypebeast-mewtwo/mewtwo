CREATE TABLE IF NOT EXISTS reviews (
    "_id" serial NOT NULL, 
    "description" varchar NOT NULL, 
    "user" varchar NOT NULL,
    "product_id" varchar NOT NULL,
    "rating" int NOT NULL,
    CONSTRAINT "reviews_pk" PRIMARY KEY ("_id") 
);