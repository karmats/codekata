/**
 * In this kata, your task is to create a regular expression capable of evaluating binary strings (strings with only 1s and 0s) and determining
 * whether the given string represents a number divisible by 3.
 */
var multipleOf3 = {
  test: function(input) {
    if (
      !input ||
      typeof input !== "string" ||
      /^[10]*$/.test(input) === false
    ) {
      return false;
    }
    const dec = parseInt(input, 2);
    return dec % 3 === 0;
  }
};

var multipleOf3Regex = /^(0*(1(01*0)*1)*)*$/;
