const firsts = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
const seconds = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }
const tenths = { 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' }

module.exports = function toReadable(number) {
    let humanReadableNumber = '';

    if (number < 10) {
        return firsts[number];
    }

    const firstRemainder = number % 10;

    if (number < 20) {
        return seconds[number];
    }

    if (number < 100 && firstRemainder) {
        return `${tenths[parseInt(number / 10)]} ${firsts[firstRemainder]}`;
    } else if (number < 100) {
        return tenths[parseInt(number / 10)];
    }

    if (number % 100 === 0) {
        return `${toReadable(parseInt(number / 100))} hundred`;
    } else {
        return `${toReadable(parseInt(number / 100))} hundred ${toReadable(number % 100)}`;
    }
}
