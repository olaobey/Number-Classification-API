const numberService = require('../services/numberService');

const classifyNumber = async (req, res, next) => {
    const { number } = req.query;

    // Validate input
    if (!number || isNaN(number)) {
        return res.status(400).json({
            number: number || 'undefined',
            error: true,
        });
    }

    try {
        const numberInfo = await numberService.getNumberInfo(Number(number));
        res.status(200).json(numberInfo);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    classifyNumber,
};