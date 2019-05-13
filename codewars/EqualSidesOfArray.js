/**
 * You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the
 * integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
 *
 * For example:
 * Let's say you are given the array {1,2,3,4,3,2,1}:
 * Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3})
 * and the sum of the right side of the index ({3,2,1}) both equal 6.
 */
function findEvenIndex(arr) {
  const sum = a => a.reduce((s, c) => s + c, 0);
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice();
    const right = left.splice(i);
    right.shift();
    if (sum(left) === sum(right)) {
      return i;
    }
  }
  return -1;
}
