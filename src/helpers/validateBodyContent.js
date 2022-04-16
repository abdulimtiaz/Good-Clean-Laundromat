// Verifies each property has a value that is not undefined

const validateBodyContent = (content, res) => {
    for (let key of Object.keys(content)) {
        const value = content[key];
        if (typeof value === 'undefined')
            return res.status(400).json({ msg: `${key} not indicated` });
    }
};

module.exports = validateBodyContent;