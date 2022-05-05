const UserType =
    `DO $$ BEGIN 
        CREATE TYPE UserType AS ENUM ('Customer', 'Employee'); 
    EXCEPTION 
        WHEN duplicate_object THEN null; 
    END $$;`;

module.exports = UserType;

/*
    * This is the SQL query that defines UserType
    * This is the type of user that is logged in; either a Customer or an Employee
*/