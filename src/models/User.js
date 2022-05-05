const User = 
    `CREATE TABLE IF NOT EXISTS User_ (
        email CITEXT PRIMARY KEY,
        password TEXT,
        phone_number TEXT,
        type UserType DEFAULT 'Customer'
    )`;

module.exports = User;

/*
    * This is the SQL query to create the User table for the database
    * type UserType is defined in UserType.js
*/