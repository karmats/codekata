/**
 * This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
 *
 * The arguments are passed as strings.
 * The numbers may be way very large
 * Answer should be returned as a string
 * The returned "number" should not start with zeros e.g. 0123 is invalid
 */
const add = (a, b) => {
  const first = a.length > b.length ? a : b;
  let last = first === a ? b : a;
  let carry = 0;
  while (last.length < first.length) {
    last = "0" + last;
  }
  let result = "";
  for (let i = first.length - 1; i >= 0; i--) {
    const added = parseInt(first[i]) + parseInt(last[i] || 0) + carry;
    carry = added >= 10 ? 1 : 0;
    result = (added % 10) + result;
  }
  return carry ? carry + result : result;
};

function multiply(a, b) {
  const aInt = parseInt(a);
  const bInt = parseInt(b);
  if (Number.isSafeInteger(aInt * bInt)) {
    return aInt * bInt + "";
  }
  let result = b;
  for (let i = "1"; i !== a; i = add(i, "1")) {
    console.log(i);
    result = add(b, result);
  }
  return result;
}
