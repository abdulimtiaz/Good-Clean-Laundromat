const { pool } = require('../../../utils/db');

const getAllCards = async (req, res) => {
    try {
        let cards;
        if (req.query.active == 'true') {
            cards = await pool.query(`SELECT * FROM Card_ WHERE activeStatus = TRUE`);
        } else {
            cards = await pool.query(`SELECT * FROM Card_`);
        }

        return res.status(200).json(cards.rows);

    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getAllCards;