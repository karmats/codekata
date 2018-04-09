/**
 * All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name.
 * For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
 */
export function feast(beast: string, dish: string): boolean {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
