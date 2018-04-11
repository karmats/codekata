/**
 * Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
 */
export enum Issuer {
    VISA = 'VISA',
    AMEX = 'AMEX',
    Mastercard = 'Mastercard',
    Discover = 'Discover',
    Unknown = 'Unknown',
}
export const getIssuer = (x: number): Issuer => {
    const numberString = x + '';
    let issuer = Issuer.Unknown;
    if (numberString.length === 15 && numberString.startsWith('34') || numberString.startsWith('37')) {
        issuer = Issuer.AMEX;
    } else if (numberString.length === 16) {
        if (numberString.startsWith('6011')) {
            issuer = Issuer.Discover;
        } else if (['51', '52', '53', '54', '55'].indexOf(numberString.substring(0, 2)) >= 0) {
            issuer = Issuer.Mastercard;
        } else if (numberString.startsWith('4')) {
            issuer = Issuer.VISA;
        }
    } else if (numberString.length === 13 && numberString.startsWith('4')) {
        issuer = Issuer.VISA;
    }
    return issuer;
};
