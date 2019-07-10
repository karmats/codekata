function anagrams(word, words) {
  const isAnagram = (w1, w2) => {
    if (w1.length !== w2.length) {
      return false;
    }
    const w1Arr = w1.split("");
    const w2Arr = w2.split("");
    for (let i = 0; i < w1Arr.length; i++) {
      const w2Idx = w2Arr.indexOf(w1Arr[i]);
      if (w2Idx < 0) {
        return false;
      }
      w2Arr.splice(w2Arr.indexOf(w1Arr[i]), 1);
    }
    return w2Arr.length === 0;
  };

  const result = [];
  words.forEach(w => {
    if (isAnagram(word, w)) {
      result.push(w);
    }
  });
  return result;
}
