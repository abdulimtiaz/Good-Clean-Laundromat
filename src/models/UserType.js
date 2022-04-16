const UserType =
    "DO $$ BEGIN \
        CREATE TYPE UserType AS ENUM ('Customer', 'Employee'); \
    EXCEPTION \
        WHEN duplicate_object THEN null; \
    END $$;";

module.exports = UserType;