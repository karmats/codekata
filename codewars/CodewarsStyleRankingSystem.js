/**
 * Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.
 */
function User() {
  this.rank = -8;
  this.progress = 0;

  this.incProgress = rank => {
    if (rank > 8 || rank === 0 || rank < -8) {
      throw new Error("Invalid rank " + rank);
    }
    const rankingDiff =
      rank > 0 && this.rank < 0
        ? rank - this.rank - 1
        : this.rank > 0 && rank < 0
        ? rank - this.rank + 1
        : rank - this.rank;
    if (rankingDiff === -1) {
      this.progress += 1;
    } else if (rankingDiff === 0) {
      this.progress += 3;
    } else if (rankingDiff > 0) {
      this.progress += 10 * rankingDiff * rankingDiff;
    }
    for (
      let rankProgress = this.progress - 100;
      rankProgress >= 0;
      rankProgress = this.progress - 100
    ) {
      if (this.rank < 8) {
        this.rank = this.rank === -1 ? 1 : this.rank + 1;
        this.progress = rankProgress;
      } else {
        break;
      }
    }
    if (this.rank === 8) {
      this.progress = 0;
    }
  };
}
