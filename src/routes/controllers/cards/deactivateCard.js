const { pool } = require('../../../utils/db');
const validateBodyContent = require('../../../helpers/validateBodyContent');

const deactivateCard = async (req, res) => {
    try {
        const { id } = req.params;

        // check if 

        await pool.query(
            `UPDATE Card_ 
            SET activeStatus = False
            WHERE id = ($1)`,
            [id]
        );

        return res.status(200).json({ msg: 'Card status updated successfully' });
        
    } catch (err) {
        console.log(`Error in ${__filename}:\n`, err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = deactivateCard;