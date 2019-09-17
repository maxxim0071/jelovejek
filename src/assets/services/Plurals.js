export default (number, first, second, fifth) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20)
        return `${number} ${fifth}`;

    n %= 10;
    if (n === 1)
        return `${number} ${first}`;
    if (n >= 2 && n <= 4)
        return `${number} ${second}`

    return `${number} ${fifth}`;
}