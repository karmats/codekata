var api = require('./API.js');

function Solution() {

    // Fill array with all gold price data from API
    const numDays = api.getNumDays();
    if (numDays <= 0) {
        throw new Error('Must be at least one day');
    }
    const sells = [];
    for (let i = 0; i < numDays; i++) {
        const priceOnDay = api.getPriceOnDay(i);
        if (!priceOnDay) {
            throw new Error('Price on day must be defined');
        }
        sells[i] = api.getPriceOnDay(i);
    }

    // Calculate the best result buy going through the whole array with gold price data
    // and check which buy day that gives the largest diff with sell day
    this.bestResult = sells
    .map((sell, idx) => {
        let bestDiff = {
            buyDay: idx,
            sellDay: 0,
            diff: 0
        }
        for (let i = idx; i < sells.length; i++) {
            const diff = sells[i] - sell;
            if (diff > bestDiff.diff) {
                bestDiff.sellDay = i;
                bestDiff.diff = diff;
            }
        }
        return bestDiff;
    })
    .reduce((p, c) => {
        if (c.diff > p.diff) {
            return c;
        }
        return p;
    }, { diff: 0 })
}

/**
 * Return the day which you buy gold. The first day has number zero. This method 
 * is called first, and only once.
 * 
 * @returns {int}
 */
Solution.prototype.getBuyDay = function() {
    return this.bestResult.buyDay;
};
/**
 * Return the day to sell gold on. This day has to be after (greater than) the 
 * buy day. The first day has number zero (although this is not a valid sell 
 * day). This method is called second, and only once.
 * 
 * @returns {int}
 */
Solution.prototype.getSellDay = function() {
    return this.bestResult.sellDay;
}

module.exports = Solution;