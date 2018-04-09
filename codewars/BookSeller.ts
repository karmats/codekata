/**
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters.
 * The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive
 *  integer n (int n >= 0) which indicates the quantity of books of this code in stock. 
 */
export class G964 {

    public static stockList = (listOfArt, listOfCat) => {
        if (!listOfArt.length || !listOfArt.length) {
            return '';
        }
        const categorySum = listOfArt.reduce((acc, c) => {
            const firstChar = c[0];
            if (listOfCat.indexOf(firstChar) >= 0) {
                const amount = parseInt(c.split(' ')[1].trim());
                acc[firstChar] = (acc[firstChar] || 0) + amount;
            }
            return acc;
        }, {});
        let result = [];
        for (let cat of listOfCat) {
            result.push(`(${cat} : ${categorySum[cat] || 0})`)
        }
        return result.join(' - ');
    }
}
