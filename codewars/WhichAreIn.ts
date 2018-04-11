/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
 * 
 * @example
 * 1: a1 = ["arp", "live", "strong"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns ["arp", "live", "strong"]
 */
export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {
        return a1.filter(word1 => a2.some(word2 => word2.indexOf(word1) >= 0)).sort();
    }
}
