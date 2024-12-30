CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL, -- 'client' or 'walker'
    phone VARCHAR(20),
    address TEXT
);

CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    service_type VARCHAR(50), -- 'walk' or 'boarding'
    date DATE,
    time TIME,
    notes TEXT
);
