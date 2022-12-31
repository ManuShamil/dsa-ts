function reverse(x: number): number {

    let isNegative = false
    if ( x < 0 ) isNegative = true 

    let numString = x.toString().replace(`-`, ``)
    let numStringReversed = numString.split(``).reverse().join(``)

    if ( isNegative ) numStringReversed = `-${numStringReversed}`

    let result = parseInt(numStringReversed)

    if ( result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) ) return 0;

    return result;
};