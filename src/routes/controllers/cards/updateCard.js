const { pool } = require('../../../utils/db');
const validateBodyContent = require('../../../helpers/validateBodyContent');

const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const { newMessage } = req.body;

        const required = {
            id,
            newMessage
        };

        const { statusCode } = validateBodyContent(required, res) || {};
        if (statusCode === 400) {
            return;
        }

        await pool.query(
            `UPDATE Card_ 
            SET message = ($2) 
            WHERE id = ($1)`,
            [id, newMessage]
        );

        return res.status(200).json({ msg: 'Card updated successfully' });
        
    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = updateCard;