/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
 */
const upperCaseSpan = {
  from: 65,
  to: 90
};
const lowerCaseSpan = {
  from: 97,
  to: 122
};
const isUpperCase = char => char.toUpperCase() === char;

const cipher = char => {
  const charCode = char.charCodeAt(0);
  let span;
  if (
    isUpperCase(char) &&
    charCode >= upperCaseSpan.from &&
    charCode <= upperCaseSpan.to
  ) {
    span = upperCaseSpan;
  }
  if (charCode >= lowerCaseSpan.from && charCode <= lowerCaseSpan.to) {
    span = lowerCaseSpan;
  }
  return span
    ? String.fromCharCode(
        charCode + 13 > span.to
          ? ((charCode + 12) % span.to) + span.from
          : charCode + 13
      )
    : char;
};

function rot13(message) {
  return message
    .split("")
    .map(cipher)
    .join("");
}
