// 1. Use strict
// added in ES5
// use this for Vanila Javascript
'use strict';

// 2. Variable
// let (added in ES6)
// block scope
let globalName = 'golbal name';
{
    let name = 'jiyoung';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move, declaration from bottom to top)
// hoisting 어디에 선언했냐에 상관없이 선언을 항상 젤 위로 끌어 올려 주는 것

// 3. Constants
// 'favor immutable data type always' for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// mutable - let, immutable - const

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type: ${typeof size}');

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

 // bigInt (fairly new, don't use it yet)
 const bigInt = 123456789012345678901234567890n; // js number는 over (-2**53 ~ 2**53)
 console.log('value: ${bigInt}, type: ${typeof bigInt}');
 Number.MAX_SAFE_INTEGER;

 //string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = 'hi ${brendan}!'; // template literals (string)
console.log('value: ${helloBob}, type: ${typeof helloBob}');
 
