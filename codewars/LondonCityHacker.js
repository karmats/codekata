/**
 * Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50.
 * If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.
 *
 * Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx
 */
function londonCityHacker(journey) {
  const total = journey
    .reduce(
      (result, fair, idx, arr) => {
        let skipNext = false;
        if (result.skipNext) {
          return {
            total: result.total,
            skipNext
          };
        }
        const isBusRide = typeof fair === "number";
        if (isBusRide && typeof arr[idx + 1] === "number") {
          skipNext = true;
        }
        const price = isBusRide ? 1.5 : 2.4;
        return { total: price + result.total, skipNext };
      },
      { skipNext: false, total: 0 }
    )
    .total.toFixed(2);
  return `£${total}`;
}
