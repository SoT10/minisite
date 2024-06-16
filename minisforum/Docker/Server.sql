-- Подключаемся к базе данных по умолчанию
\c postgres

-- Удаляем базу данных minisite, если она существует (если она не нужна)
DROP DATABASE IF EXISTS minisite;

-- Создаем базу данных minisite
CREATE DATABASE minisite;

-- Подключаемся к базе данных minisite
\c minisite
/*
CREATE TABLE IF NOT EXISTS products (
    "product_id" BIGSERIAL PRIMARY KEY,
    "product_name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(50),
    "price" DECIMAL(10, 2) NOT NULL,
    "kolvo" INT,
    "description" TEXT,
    "image" VARCHAR(255),
    "back_image" VARCHAR(255),
    "image1" VARCHAR(255),
    "image2" VARCHAR(255),
    "image3" VARCHAR(255),
    "image4" VARCHAR(255),
    "image5" VARCHAR(255),
    "image6" VARCHAR(255),
    "date_added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "in_stock" BOOLEAN DEFAULT TRUE,
    "rating" FLOAT
);

CREATE TABLE IF NOT EXISTS zakazi (
    "id" BIGSERIAL PRIMARY KEY,
    "username" VARCHAR(30),
    "date" DATE,
    "status" VARCHAR(15),
    "itogo" DECIMAL(10, 2),
    "zakaz" VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS adress (
    "id" BIGSERIAL PRIMARY KEY,
    "username" VARCHAR(30),
    "first_name" VARCHAR(15),
    "last_name" VARCHAR(15),
    "oblast" VARCHAR(30),
    "city" VARCHAR(15),
    "adress" VARCHAR(80),
    "postal_code" VARCHAR(8)
);
*/