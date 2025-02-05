const axios = require('axios');
const numberUtils = require('../utils/numberUtils');

const getNumberInfo = async (number) => {
    // Check if the number is prime, perfect, Armstrong, etc.
    const isPrime = numberUtils.isPrime(number);
    const isPerfect = numberUtils.isPerfect(number);
    const isArmstrong = numberUtils.isArmstrong(number);
    const isEven = numberUtils.isEven(number);
    const digitSum = numberUtils.getDigitSum(number);

    // Determine properties
    const properties = [];
    if (isArmstrong) properties.push('armstrong');
    if (isEven) properties.push('even');
    else properties.push('odd');

    // Fetch fun fact from Numbers API
    const funFact = await getFunFact(number);

    return {
        number,
        is_prime: isPrime,
        is_perfect: isPerfect,
        properties,
        digit_sum: digitSum,
        fun_fact: funFact,
    };
};

const getFunFact = async (number) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`);
        return response.data;
    } catch (error) {
        return 'No fun fact available for this number.';
    }
};

module.exports = {
    getNumberInfo,
};