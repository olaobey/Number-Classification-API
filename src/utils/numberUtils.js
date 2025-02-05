const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

const isPerfect = (number) => {
    if (number < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) sum += number / i;
        }
    }
    return sum === number;
};

const isArmstrong = (number) => {
    const digits = String(number).split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === number;
};

const isEven = (number) => number % 2 === 0;

const getDigitSum = (number) => {
    return String(number)
        .split('')
        .reduce((acc, digit) => acc + Number(digit), 0);
};

module.exports = {
    isPrime,
    isPerfect,
    isArmstrong,
    isEven,
    getDigitSum,
};