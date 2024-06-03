CREATE DATABASE minisite;
\c minisite;

CREATE TABLE "users" (
  "id" BIGSERIAL PRIMARY KEY,
  "email" VARCHAR(30),
  "password" VARCHAR(30)
);

CREATE TABLE "shop" (
  "id" BIGSERIAL PRIMARY KEY,
  "price" VARCHAR(30)
);