const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const { verifyDBConnection } = require('./utils/db');
const createTables = require('./utils/createTables');

// use environment variables
dotenv.config();

// intialize app
const app = express();

// this lets us parse 'application/json' content in http requests
app.use(express.json());

// make server accessible to any domain
app.use(cors());

// logging
const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts routes/index.js at the route `/api`
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server has started on port ${PORT}`);
    await verifyDBConnection();
    await createTables();
});