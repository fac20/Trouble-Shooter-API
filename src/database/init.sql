BEGIN;

DROP TABLE IF EXISTS users, categories, prompts;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    cat_name VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE prompts (
    id SERIAL PRIMARY KEY,
    cat_id INTEGER REFERENCES categories(id),
    prompt_id INTEGER,
    prompt TEXT NOT NULL,
    route_one_txt VARCHAR(255),
    route_one INTEGER,
    route_two_txt VARCHAR(255),
    route_two INTEGER
);

COMMIT;
