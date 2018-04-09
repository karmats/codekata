/**
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters
 */
export class G964 {

    public static longest = (s1, s2) => {
        const distinct = arr => {
            return arr.filter((c, idx) => arr.indexOf(c) === idx);
        }
        const distS1 = distinct(s1.split(''));
        const distS2 = distinct(s2.split(''));
        const dist = distinct(distS1.concat(distS2));
        return dist.sort().join('');
    }
}
