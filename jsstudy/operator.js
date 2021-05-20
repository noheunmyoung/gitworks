// 1. user strict : 
// added in ES 5
// use this for Valina Javascript

'use strict';

// 1. String concatenation : 문자열과 문자열을 합해서 새로운 문자열을 만듬
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators : 누메릭 오퍼레이터는 숫자 연산하는 오퍼레이터
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multipy
console.log(5 % 2); //remainder : 나머지 구하기
console.log(2 ** 3); //exponentiation  : 2에 3승

// 3. Increment and decrement operators : 증가, 감소시키는 오퍼레이터
let counter = 2; //숫자 2를 변수에 할당

// preIncrement
const preIncrement = ++counter; //++기호는 카운터에 1을 더해서 변수에 할당하라. 즉 변수 2에 하나 더한 값 1을 할당하라.
console.log(`preIncrement: ${preIncrement}, counter ${counter}`);
// 위 코드 풀이
// counter = counter + 1;  우선 카운터에 1을 더한 것을 변수 카운터에 할당한 다음
// preIncrement = counter // 변수에 1더한 값(3)을 할당  
 
// postIncrement
const postIncrement = counter++; 
console.log(`postIncrement: ${postIncrement}, counter ${counter}`);
// 위 코드풀이
// postIncrement = counter // 카운터를 먼저 변수에 할당하고
// counter = counter + 1; // 그 다음 카운터를 하나 증가해서 할당

// preDecrement 
const preDecrement = --counter;  
console.log(`preDecrement: ${preDecrement}, counter ${counter}`);

// postDecrement
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter ${counter}`);

// 4. Assignment operators : 할당하는 오퍼레이터
let x = 3;
let y = 6;

x += y; // x = x + y : 와 같은 방식인데 반복되는 x생락해서 x += y 형태로 표기
x -= y;  
x *= y;
x /= y;

console.log(`x: ${x + y}`); 

// 5. Comparison operators : 비교하는 오퍼레이터

console.log(10 < 6); // Less Than
console.log(10 <= 6); // Less Than or equal
console.log(10 > 6); // greater Than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or) : finds the first truthy value(3개중에 하나가 true면 반환)
console.log(`or: ${value1 || value2 || check()}`); 
// 3개중에 첫번째 것이 true면 무조건 멈추고 나머지2개는 실행이 안된다. 왜냐하면 3개중에 하나가 true면 반환하는 조건문이기 때문에 뒤에 조건이 true라도 무조건 반환
// 그래서 check같은 연산을 많이하는 함수는 배치를 맨 뒤에 해야한다.

// && (and) : finds the first falsy value(3개다 모두 true일때 반환)
console.log(`and: ${value1 || value2 || check()}`);
// 첫번째것이 false면 무조건 멈추고 나머지 2개는 실행안된다. 왜냐하면 3개가 모두 true일때만 반환하기 때문
// 그래서 check같은 연산을 많이하는 함수는 배치를 맨 뒤에 해야한다. 

// often used to compress long if-statement(긴 if문을 압축하는데 자주 사용됨)
// null 체크할때 사용됨
// nullableObject && nullableObject.something  : 널오브젝트가 널이면 false가 되기 때문에 나머지가 실행이 안되서 썸띵이란 벨류를 받아오지 못함.
// 널오브젝트가 널이 아닐때 즉 true일때만 썸띵이란 벨류를 받아옴
// 위에 내용을 아래와 같이 작성할 수 있음
//if (nullableObject != null){ 
//    nullableObject.something
//}
// check함수는 무조건 true 반환
function check() {  
    for (let i = 0; i < 10; i++)
    //wastintg time
    console.log('dd');
    return true; 
}

// ! (not) : 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality : with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive); // 반환 값은 false 왜냐하면 같은데 같지 않다고 했기때문에 반환값이 false. == 은 숫자와 스트링을 구분하지 않고 같은 5이기 때문에 같다고 판단

// === srtict equality : no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive); // 반확값은 ture 왜냐하면 같지 않은데 같지 않다고 했기때문에 ture. === 는 스트링과 넘버를 엄격하게 구분하여 판단

//object equality by reference(오브젝트는 메모리에 탑재될때 레퍼런스형태로 저장)
const ellie1 = { name: 'ellie' }; 
const ellie2 = { name: 'ellie' }; // ellie1과 같은 네임이지만 다른 레퍼런스에 저장되므로 ellie와는 다른 변수
const ellie3 =  ellie1 // ellie1과 똑같은 레퍼런스 

console.log(ellie1 == ellie2); //loose equality라도 object는 각각 다른 레퍼런스에 저장되므로 반환값은 false
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3); 

// equality - puzzler
console.log(0 == false); // 0, null, undefined, NaN, ''은 false로 간주된다. 그래서 반환값은 ture 
console.log(0 === false); // 0은 boolean 타입이 아니므로 반환값은 false
console.log('' == false); // 0, null, undefined, NaN, ''은 false로 간주된다. 그래서 반환값은 ture 
console.log('' === false); // ''은 boolean 타입이 아니므로 반환값은 false
console.log(null == undefined); // 0, null, undefined, NaN, ''은 false로 간주된다. 그래서 반환값은 ture
console.log(null === undefined); // null은 boolean 타입이 아니므로 반환값은 false

//boolean : any other value (이 3가지는 true로 간주 )

// 8. Conditional operators : if
// if, else if, else

const name = 'ellie';
if (name === 'ellie'){ //니가 앨리면
    console.log('Welcome, Ellie!');
}else if (name === 'coder') {  // 앨리가 아니고 코더면
    console.log('You are amazing coder');
}else { //엘리도 아니고 코더도 아니면 
    console.log('unkwnon');
}

// 9. Ternary operators(if를 간단하게 작성하는 방법) : 간단할때만 사용
// condition ? value1 : value2; 
// 상태 뒤에 ?마크를 붙이면 트루니? ture면 value1을 반환하고 false면 value2를 반환
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';

switch (browser) {
case 'IE':
 console.log('go away!');
 break;
case 'Chrome':
case 'Firefox':
 console.log('love you!'); // 문구가 같은경우는 case를 묶어서 표현해도 됨
 break; 
default:
 console.log('sane all!');
 break;
}

// 11. Loops : 반복문

// while loop, while the condition is truthy, body code is execited : while 반복문은 조건문이 맞을때만 코드를 실행한다.
// do while loop, body code is executed first then check the condition : do while 반복문은 블럭안에 코드를 먼저 탐색하고 조건을 실행한다.  
// 블럭을 먼저 실행하고 싶다면 do while를 사용하고 조건이 맞을때만 실행하고 싶다면 while를 사용한다.


// 하기 예제 : i가 0보다 클때까지 i를 1씩 감소시켜라
let i = 3;
while (i > 0) { 
    console.log(`while: ${i}`);
    i--;
} 
  
do {
 console.log(`do while: ${i}`);
 i--;
} while (i > 0)


// for Loops, for(begin; condition; step) : begin은 딱 한번만 호출하여 스텝에따라 조건이 맞을때 까지만 실행
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

// inline variable declaration : 지역번수를 선언하여 조건을 실행하기도 한다.
for (let i = 3; i > 0; i = i - 2) { 
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    } 
}

// break(반복을 끝내는것), continue(반복을 지금것만 스킵하고 다시 다음스탭으로 넘어감)

// Q1. iterate from 0 to 10 and print only even numbers (use continue) : 0에서 10까지 반복하고 짝수 만 인쇄 

// 0부터 11보다 작을때까지 숫자가 뺑뺑 돌면서 홀수인경우는 continue를 호출하여 스킵하고 다음 호출
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {  // % : 나머지 구하는 오퍼레이터 - 홀수 찾기
        continue;
    }
    console.log(`q1. ${i}`);   
}

// 0부터 11보다 작을때까지 숫자가 뺑뺑 돌면서 짝수인 경우 호출
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {  // % : 나머지 구하는 오퍼레이터 - 짝수인 경우 찾기 
        console.log(`q1. ${i}`); 
    } 
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break) : 0에서 10까지 반복하고 8에 도달 할 때까지 숫자를 인쇄합니다. 

// 0부터 11보다 작을때까지 숫자가 뺑뺑 돌면서 만약에 i가 8보다 크면 멈춰라
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
  console.log(`q2. ${i}`);
}






