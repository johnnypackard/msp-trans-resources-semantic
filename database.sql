CREATE TABLE registered_users (
	id SERIAL PRIMARY KEY,
	person_id INT REFERENCES "businesses",
	profile_image VARCHAR (1000),
	gender VARCHAR (100),
	pronouns VARCHAR (100),
	admin BOOLEAN NOT NULL
);

CREATE TABLE businesses (
	id SERIAL PRIMARY KEY,
	biz_name VARCHAR (1000),
	contact_name VARCHAR (100),
	address VARCHAR (500),
	gender VARCHAR (100),
	race VARCHAR (100),
	language VARCHAR (100),
	image_url VARCHAR (2083),
	username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
	biz_id INT REFERENCES "resources",
);

CREATE TABLE resources (
    id SERIAL PRIMARY KEY,
    biz_name VARCHAR (1000),
    contact_name VARCHAR (100),
    address VARCHAR (500),
    gender VARCHAR (100),
    race VARCHAR (100),
    language VARCHAR (100),
    image_url VARCHAR (2083),
	biz_notes VARCHAR (2083),
	resources_id INT REFERENCES "search",
);
 
CREATE TABLE search (
	id SERIAL PRIMARY KEY,
	search_id INT REFERENCES "businesses"
);