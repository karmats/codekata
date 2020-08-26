function missing(s) {
  for (let i = 1; i < 10; i++) {
    const numbers = Array.from(new Set(extractNumbers(s, i))).map((n) => +n);
    if (numbers.length) {
      let missing = [];
      for (let i = 0; i < numbers.length - 1; i++) {
        const next = numbers[i] + 1;
        if (next !== numbers[i + 1]) {
          missing.push(next);
        }
      }
      return missing.length === 1 ? missing[0] : -1;
    }
  }
  return -1;
}

function extractNumbers(str, length) {
  let nums = [];
  for (let i = 0, len = length; i < str.length - len; ) {
    const curr = str.substr(i, len);
    const next = +curr + 1;
    let newLen = `${next}`.length;
    let actual = str.substr(i + len, newLen);
    if (
      !close(next, +actual) &&
      next
        .toString()
        .split("")
        .every((s) => s === "9")
    ) {
      newLen = newLen + 1;
      actual = str.substr(i + len, newLen);
    }
    i = i + len;
    len = newLen;

    correct = close(next, +actual);
    if (!close(next, +actual)) {
      nums = [];
      break;
    }
    nums.push(curr);
    nums.push(actual);
  }
  return nums;
}

function close(a, b) {
  return a === b || a + 1 === b;
}

console.log(missing("123567") + " => 4");
console.log(missing("899091939495") + " => 92");
console.log(missing("9899101102") + " => 100");
console.log(missing("599600601602") + " => -1");
console.log(missing("8990919395") + " => -1");
console.log(missing("998999100010011003") + " => 1002");
console.log(missing("99991000110002") + " => 10000");
console.log(missing("979899100101102") + " => -1");
console.log(missing("900001900002900004900005900006") + " => 900003");
console.log(missing("99799810001001") + " => 999");
