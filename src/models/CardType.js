const CardType =
    `DO $$ BEGIN 
        CREATE TYPE CardType AS ENUM ('Delivery', 'Note'); 
    EXCEPTION 
        WHEN duplicate_object THEN null; 
    END $$;`;

module.exports = CardType;

/*
    * This is the SQL query that defines CardType
    * This is the type of card that is created; either a Delivery or Note
*/