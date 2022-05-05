const CITEXT = `CREATE EXTENSION IF NOT EXISTS CITEXT`;

module.exports = {
    CITEXT,
};

/*
    * This is the SQL query to load the extension CITEXT into db
    * From postgres documentation: "The citext module provides a case-insensitive character string type, citext.
    Essentially, it internally calls lower when comparing values."
    * Rationale: We use this type for keys for case-insensitive comparisons 
*/