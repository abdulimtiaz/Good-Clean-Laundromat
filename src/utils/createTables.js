const models = require('../models');
const { pool } = require('./db');

const createTables = async () => {
    // creates tables that are used in the app
    for (const [name, creationStatement] of Object.entries(models)) { // Object.entries(models) is the combination of all queries, created from ../models/index.js ?
        try {
            await pool.query(creationStatement); // runs all the queries in the database ?
            console.log(`${name} table created`);
        } catch (err) {
            console.log(`Error in ${__filename}:\n`, err);
        }
    }
};

module.exports = createTables;