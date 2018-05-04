/**
* Your task is to reduce a list of numbers to one number.
 * For this you get a list of rules, how you have to reduce the numbers.
 * You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.
 */
type RuleFunction = (a: number, b: number) => number;

export function reduceByRules(numbers: number[], rules: RuleFunction[]): number {
    return numbers.reduce((acc, c, idx) => {
        if (idx === 0) {
            return { ruleIdx: acc.ruleIdx, result: c };
        }
        const result = rules[acc.ruleIdx](acc.result, c);
        const ruleIdx = (acc.ruleIdx + 1) % rules.length;
        return { ruleIdx, result }

    }, { result: 0, ruleIdx: 0 }).result;
}
