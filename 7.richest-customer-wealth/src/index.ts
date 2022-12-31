function maximumWealth(accounts: number[][]): number {
    let max = 0

    accounts.forEach( val => {
        let sum = val.reduce( ( el0, el1 ) => el0 + el1 )
        if ( sum > max )
            max = sum;
    })

    return max
};

console.log(
    maximumWealth(
        [
            [51, 1],
            [51, 24]
        ]
    )
)


type RGB = readonly [red: number, green: number, blue: number];
type Color = { value: RGB | string };

const myColor = { value: 'red' } satisfies Color; // works
const myIncorrectColor = { value: 100 } satisfies Color; // throws error