const User = 
    `CREATE TABLE IF NOT EXISTS User_ (
        email CITEXT PRIMARY KEY,
        password TEXT,
        phone_number TEXT,
        type UserType DEFAULT 'Customer'
    )`;

module.exports = User;