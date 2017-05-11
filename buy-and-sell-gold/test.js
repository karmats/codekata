var api = require('./API.js');
api.numDays = 3;

var Solution = require('./Solution.js');
var solution = new Solution();
console.log('Buy day ' + solution.getBuyDay());
console.log('Sell day ' + solution.getSellDay());
