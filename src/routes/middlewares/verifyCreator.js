const { pool } = require('../../utils/db');

const verifyCreator = async (req, res, next) => {
    try {
        const { email } = req;
        const { id } = req.params;

        const { rowCount } = await pool.query(
            `SELECT 1
            FROM Card_
            WHERE id = $1
                AND creator = $2`,
            [id, email]
        );

        if (rowCount !== 1) {
            return res.status(401).json({
                msg: 'Only the card creator can access this function.',
            });
        }

        next();

    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }

};

module.exports = verifyCreator;