-- Подключаемся к базе данных по умолчанию
\c postgres

-- Удаляем базу данных minisite, если она существует (если она не нужна)
DROP DATABASE IF EXISTS minisite;

-- Создаем базу данных minisite
CREATE DATABASE minisite;

-- Подключаемся к базе данных minisite
\c minisite

CREATE TABLE IF NOT EXISTS shop (
    "id" BIGSERIAL PRIMARY KEY,
    "price" DECIMAL(10, 2) NOT NULL
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
