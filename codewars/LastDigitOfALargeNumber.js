var lastDigit = function(str1, str2) {
  const lastDigitHelper = function(d, exp) {
    if (exp.length === 1) {
      return Math.pow(d, parseInt(exp)) % 10;
    } else {
      const r = parseInt(exp.slice(-1));
      const q = exp.slice(0, -1);
      return (lastDigitHelper(Math.pow(d, 10) % 10, q) * Math.pow(d, r)) % 10;
    }
  };

  return lastDigitHelper(parseInt(str1.slice(-1)), str2);
};
