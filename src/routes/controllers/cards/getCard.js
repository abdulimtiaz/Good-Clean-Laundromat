const { pool } = require('../../../utils/db');
const validateBodyContent = require('../../../helpers/validateBodyContent');

const getCard = async (req, res) => {
    try {
        const { id } = req.params;

        const { rows: card } = await pool.query(
            `SELECT *
            FROM CARD_
            WHERE id = $1`,
            [id]
        );

        return res.status(200).json(card[0]);
    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getCard;
