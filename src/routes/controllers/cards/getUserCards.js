const { pool } = require('../../../utils/db');

const getUserCards = async (req, res) => {
    try {
        const email = req.email;
        let cards;
        cards = await pool.query(
            `SELECT *
            FROM Card_ 
            WHERE creator = $1`,
            [email]
        );

        return res.status(200).json(cards.rows);

    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getUserCards;