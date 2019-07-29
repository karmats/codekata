/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */
var moveZeros = function(arr) {
  const zeroIndexes = arr.reduce(
    (acc, c, idx) => (c === 0 ? acc.concat(idx) : acc),
    []
  );

  const result = arr.slice();
  zeroIndexes.reverse().forEach(idx => {
    result.splice(idx, 1);
    result.push(0);
  });
  return result;
};
