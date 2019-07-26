/**
 * The maximum sum subarray problem consists in finding the maximum sum
 * of a contiguous subsequence in an array or list of integers.
 * Easy case is when the list is made up of only positive numbers and
 * the maximum sum is the sum of the whole array. If the list is made up of
 * only negative numbers, return 0 instead.
 */
var maxSequence = function(arr) {
  const sum = arr => arr.reduce((s, c) => s + c, 0);

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j <= arr.length; j++) {
      const s = sum(arr.slice(i, j));
      if (s > max) {
        max = s;
      }
    }
  }
  return max;
};
