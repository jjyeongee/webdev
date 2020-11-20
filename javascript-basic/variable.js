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
const helloBob = `hi ${brendan}!`; // template literals (string) `` 백틱기호 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; //너는 텅텅빈 값이야 아무것도 아니야
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; // 선언은 되었지만 아무것도 값이 지정되지 않음 값이 있는지 없는지 정해지지 않음
console.log(`value: ${x}, type: ${typeof x}`);
 
// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// 동일한 스트링을 작성했어도 다른 심볼로 만들어짐
// 심볼은 주어진 스트링에 상관없이 고유한 식별자를 만들 때 사용

// object, real-life object, data structure
const jiyoung = {name: 'jiyoung', age: 20}; //한번 할당된 object는 다시는 다른 object로 변경 불가
jiyoung.age = 21; // 이렇게 변경 가능

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h출력
console.log(`value: ${text}, type: ${typeof test}`);
text = 1;
console.log(`value: ${text}, type: ${typeof test}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof test}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof test}`);
console.log(text.charAt(0)); // boom!

