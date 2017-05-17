var api = require('./API.js');

function Solution() {

    // Fill array with all gold price data from API
    const numDays = api.getNumDays();
    if (numDays <= 0) {
        throw new Error('Must be at least one day');
    }
    this.bestResult = {
        buyDay: -1,
        sellDay: -1,
        profit: -1
    }

    // Calculate the best result buy going through the whole array with gold price data
    // and check which buy day that gives the largest profit with sell day
    for (let buyDay = 0; buyDay < numDays; buyDay++) {
        const buyPrice = api.getPriceOnDay(buyDay);
        for (let sellDay = buyDay; sellDay < numDays; sellDay++) {
            const sellPrice = api.getPriceOnDay(sellDay);
            const profit = sellPrice - buyPrice;
            if (profit > this.bestResult.profit) {
                this.bestResult = {
                    buyDay: buyDay,
                    sellDay: sellDay,
                    profit: profit
                }
            }
        }
    }
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
