/**
 * Given a string of words, you need to find the highest scoring word.
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 */
function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const calculateScore = w =>
    w.split("").reduce((score, char) => score + alphabet.indexOf(char) + 1, 0);
  return x.split(" ").reduce(
    (highest, word) => {
      const score = calculateScore(word);
      if (score > highest.score) {
        return {
          word,
          score
        };
      }
      return highest;
    },
    {
      word: "",
      score: 0
    }
  ).word;
}
