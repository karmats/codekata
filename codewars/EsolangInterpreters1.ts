/**
 * MiniStringFuck is a derivative of the famous Brainfuck which contains a memory cell as its only form of data storage as opposed to a memory tape of 30,000 cells in Brainfuck.
 * The memory cell in MiniStringFuck initially starts at 0. MiniStringFuck contains only 2 commands as opposed to 8:
 *
 * + - Increment the memory cell. If it reaches 256, wrap to 0.
 * . - Output the ASCII value of the memory cell
 */
export function myFirstInterpreter(code: string): string {
    // Split to + arrays
    const chars = code.split('.').map(c => c.replace(/[^\+]/g, ''));
    // Need to remove the last '.' since it will always be an empty string
    chars.pop();
    let result = '';
    let currPosition = 0;
    for (let char of chars) {
        currPosition = (currPosition + char.length) % 256;
        result += String.fromCharCode(currPosition);
    }
    return result;
}
