BEGIN;

DROP TABLE IF EXISTS categories, prompts, users;

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
    prompt TEXT NOT NULL,
    route_one_txt VARCHAR(255),
    route_one INTEGER,
    route_two_txt VARCHAR(255),
    route_two INTEGER
);

INSERT INTO users (username, password) VALUES 
    ('jeremy', 'password'),
    ('jenny', 'password')
;

INSERT INTO categories (cat_name, user_id) VALUES 
    ('npm', 1)
;
    
INSERT INTO prompts (cat_id, prompt, route_one_txt, route_one, route_two_txt, route_two) VALUES
    (1,'Have a package.json?', 'yes', 2, 'no', 4), --1
    (1,'Are you in the right dir', 'yes', 3, 'no', 5), --2
    (1,'do you see modules', 'yes', null , 'no', null),  --3
    (1,'run npm init',null,null,null,null),
    (1,'nav to dir',null,1,null,null)
; --5

COMMIT;
END