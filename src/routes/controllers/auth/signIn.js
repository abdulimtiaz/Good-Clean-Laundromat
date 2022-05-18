const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { pool } = require('../../../utils/db');
const validateBodyContent = require('../../../helpers/validateBodyContent');

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const required = {
            email,
            password
        };

        const { statusCode } = validateBodyContent(required, res) || {};
        if (statusCode === 400) {
            return;
        }
    
        const { rowCount, rows } = await pool.query(
            `SELECT email, password, type
                FROM User_
                WHERE email = $1`,
                [email]
        );
    
        if (rowCount === 0) {
            return res.status(400).json({ msg: 'No matching user found' });
        }
    
        // verify matching password
        const { password: hashedPassword, type } = rows[0];
        const match = await bcrypt.compare(password, hashedPassword);
        if (!match)
            return res.status(400).json({ msg: 'Incorrect password' });
    
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        return res.status(201).json({ token, type, email, msg: 'Login successful' });
    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = signIn;
