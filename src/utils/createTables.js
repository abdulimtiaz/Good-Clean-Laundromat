const models = require('../models');
const { pool } = require('./db');

const createTables = async () => {
    // creates tables that are used in the app
    for (const [name, creationStatement] of Object.entries(models)) {
        try {
            await pool.query(creationStatement);
            console.log(`${name} table created`);
        } catch (err) {
            console.log(`Error in ${__filename}:\n`, err);
        }
    }
};

module.exports = createTables;