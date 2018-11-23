/**
 * Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
 *
 * The left side letters and their power:
 *
 * w - 4
 * p - 3
 * b - 2
 * s - 1
 * t - 0 (but it's priest with Wo lo loooooooo power)
 * The right side letters and their power:
 *
 * m - 4
 * q - 3
 * d - 2
 * z - 1
 * j - 0 (but it's priest with Wo lo loooooooo power)
 *  The other letters don't have power and are only victims.
 * The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.
 */
const leftSide = { w: 4, p: 3, b: 2, s: 1 };
const leftPriest = "t";
const rightSide = { m: 4, q: 3, d: 2, z: 1 };
const rightPriest = "j";
function alphabetWar(fight) {
  const chars = fight.split("");
  const toScore = (c, idx, arr) => {
    const leftValue = leftSide[c];
    const rightValue = rightSide[c];
    if (!leftValue && !rightValue) {
      return 0;
    }
    const adjacendants = {
      left: arr[idx - 1],
      right: arr[idx + 1]
    };
    if (
      (adjacendants.left === rightPriest &&
        adjacendants.right === leftPriest) ||
      (adjacendants.left === leftPriest && adjacendants.right === rightPriest)
    ) {
      return leftValue ? leftValue : -rightValue;
    }
    if (
      leftValue &&
      (adjacendants.left === rightPriest || adjacendants.right === rightPriest)
    ) {
      return -leftValue;
    }
    if (
      rightValue &&
      (adjacendants.left === leftPriest || adjacendants.right === leftPriest)
    ) {
      return rightValue;
    }
    return leftValue ? leftValue : -rightValue;
  };
  const score = chars.reduce(
    (result, c, idx, arr) => result + toScore(c, idx, arr),
    0
  );
  if (score > 0) {
    return "Left side wins!";
  } else if (score < 0) {
    return "Right side wins!";
  }
  return "Let's fight again!";
}
