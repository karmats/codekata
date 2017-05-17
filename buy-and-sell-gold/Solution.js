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
        sells[i] = priceOnDay;
    }

    // Calculate the best result buy going through the whole array with gold price data
    // and check which buy day that gives the largest profit with sell day
    this.bestProfit = sells
    .map((sell, buyDay) => {
        let bestProfit = {
            buyDay: buyDay,
            sellDay: buyDay,
        }
        for (let sellDay = buyDay; sellDay < sells.length; sellDay++) {
            const profit = sells[sellDay] - sell;
            if (!bestProfit.profit || profit > bestProfit.profit) {
                bestProfit.sellDay = sellDay;
                bestProfit.profit = profit;
            }
        }
        return bestProfit;
    })
    .reduce((p, c) => {
        if (!p.profit || c.profit > p.profit) {
            return c;
        }
        return p;
    }, { })
}

/**
 * Return the day which you buy gold. The first day has number zero. This method 
 * is called first, and only once.
 * 
 * @returns {int}
 */
Solution.prototype.getBuyDay = function() {
    return this.bestProfit.buyDay;
};
/**
 * Return the day to sell gold on. This day has to be after (greater than) the 
 * buy day. The first day has number zero (although this is not a valid sell 
 * day). This method is called second, and only once.
 * 
 * @returns {int}
 */
Solution.prototype.getSellDay = function() {
    return this.bestProfit.sellDay;
}

module.exports = Solution;
