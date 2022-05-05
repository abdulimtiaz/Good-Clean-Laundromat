const { pool } = require('../../../utils/db');
const validateBodyContent = require('../../../helpers/validateBodyContent');

const createCard = async (req, res) => {
    try {
        const { creator, message } = req.body;

        const required = {
            creator,
            message
        };

        validateBodyContent(required, res);

        await pool.query(
            `INSERT INTO Card_ 
            (message, creator) 
            VALUES ($1, $2)`,
            [message, creator]
        );

        return res.status(201).json({ msg: 'Card created successfully' });
        
    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = createCard;