function API() {
}

var dayAndPrice = [ 7, 12, 5, 3, 11, 6, 10, 2, 9 ];

API.numDays = 0;

API.getNumDays = function() {
    return API.numDays;
}

API.getPriceOnDay= function(day) {
    return dayAndPrice[day];
}

module.exports = API;
