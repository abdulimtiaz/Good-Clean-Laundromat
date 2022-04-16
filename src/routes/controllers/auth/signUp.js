const bcrypt = require('bcrypt');
const { pool } = require('../../../utils/db');
const validateBodyContent = require('../../../helpers/validateBodyContent');

const signUp = async (req, res) => {
    try {
        const { email, password, phoneNumber } = req.body;
        const required = {
            email,
            password,
            phoneNumber
        };

        const { statusCode } = validateBodyContent(required, res) || {};
        if (statusCode === 400) {
            return;
        }

        // check if email already exists

        const { rowCount } = await pool.query(
            `SELECT 1 FROM User_ WHERE email = $1`,
            [email]
        );

        if (rowCount !== 0) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        await pool.query(
            `INSERT INTO User_ 
            (email, password, phone_number) 
            VALUES ($1, $2, $3)`,
            [email, hashedPassword, phoneNumber]
        );

        return res.status(201).json({ msg: 'User created successfully' });

    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = signUp;