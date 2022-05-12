const getUserFromToken = require('../../helpers/getUserFromToken');

const authenticateToken = async (req, res, next) => {
    try {
        let token = req.headers['authorization']; // token comes in an authorization header
        const email = getUserFromToken(token);
        req.email = email; // send user email to the next middleware function or the controller
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ msg: err.message });
    }
};

module.exports = authenticateToken;
