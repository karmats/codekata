function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.

  const getArrayValues = (arr, from, to) => {
    let a = [];
    for (let i = from; i <= to && i < arr.length; i++) {
      a = [...a, arr[i]];
    }
    return a;
  };
  const result = array.reduce(
    (acc, c, idx) => {
      const { arr, zeros } = acc;
      if (c === 0 || c === "0") {
        return {
          arr: [
            ...getArrayValues(arr, 0, idx),
            ...getArrayValues(idx + 1, arr.length)
          ],
          zeros: [...zeros, c]
        };
      }
      return {
        arr: [...arr, c],
        zeros: zeros
      };
    },
    { arr: [], zeros: [] }
  );
  return [...result.arr, ...result.zeros];
}
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])); // => [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
