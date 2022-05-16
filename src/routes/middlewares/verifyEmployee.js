const { pool } = require('../../utils/db');

const verifyEmployee = async (req, res, next) => {
    try {
        const { email } = req; // email passed after authenticating token

        const { rows } = await pool.query(
            `SELECT type
            FROM User_
            WHERE email = $1`,
            [email]
        );
    
        if (rows[0].type != 'Employee') {
            return res.status(401).json({
                msg: 'Only employees are allowed to access this feature.',
            });
        }

        next();

    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = verifyEmployee;