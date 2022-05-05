const Card = 
    `CREATE TABLE IF NOT EXISTS Card_ (
        id SERIAL PRIMARY KEY,
        message TEXT,
        creator CITEXT,
        type CardType,
        FOREIGN KEY (creator) REFERENCES User_(email)
    )`;

module.exports = Card;

/*
    * This is the SQL query to create the Card table for the database
    * 
*/