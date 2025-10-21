// let primes : number[];
let primes : Array<number>;
primes = [ 2, 3, 5, 7 ];

//define the data type to be an array with number or string values
//then assign an array with numbers and strings
let chequeAmount : (number | String)[];
chequeAmount = [ 100, "One thousand", 40, "Two"];

let chequeAmount2 : number[] | string[];
chequeAmount2 = [] as number[]; //type assertion
chequeAmount2.push(100);