// Obtain user information from token
// An exception will be thrown for invalid tokens

const jwt = require('jsonwebtoken');

const getUserFromToken = (bearerToken) => {
    // if no bearer token passed in
    if (typeof bearerToken !== 'string')
        throw new Error('No token, authorization denied');

    // get rid of "Bearer " prefix
    bearerToken = bearerToken.split(' ');
    const bearerText = bearerToken[0];
    const token = bearerToken[1];

    // verify proper token
    if (typeof token !== 'string' || bearerText !== 'Bearer')
        throw new Error('Specify a Bearer Token');

    // parse email from token
    let email;
    try {
        email = jwt.verify(token, process.env.JWT_SECRET).email;
    } catch (err) {
        throw new Error('Invalid token, authorization denied');
    }

    return email;
};

module.exports = getUserFromToken;
