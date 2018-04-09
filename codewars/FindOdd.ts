/**
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */
export const findOdd = (xs: number[]): number => {
    const distinct = xs.filter((n, idx) => xs.indexOf(n) === idx);
    for (let n of distinct) {
        const times = xs.reduce((sum, c) => c === n ? sum + 1 : sum, 0);
        if (times % 2 !== 0) {
            return n;
        }
    }
    return 0;
};
