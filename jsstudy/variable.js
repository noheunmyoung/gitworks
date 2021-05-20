// 1. user strict : 
// added in ES 5
// use this for Valina Javascript

'use strict';
 
//2. variable(변수)
console.log('hello world');
let name = 'noh';
console.log(name);
name ='hello';
console.log(name);

// 2.variable(변경될 수 있는 값) 
// let(added in ES6) 인터넷 익스플로러에서는 작동하지 않는다. 만약에 익스에 사용해야 한다면 바벨(BABEL)을 이용해서 다운(ES5.4)한다.
// 변수 선언 : let 

// 이전 변수 선언은 var(이제 쓰지말자~)
// 사용하면 안되는 이유
// 1). 대부분의 프로그래밍에서는 변수 선언 후 값을 할당하는게 정상이지만 var은 변수 선언전에 값을 할당해도 작동한다.
// 2). var hositing :  변수 선언전에 값을 먼저 할당하는 것(hositing은 어디에 선언했느냐에 상관없이 항상 제일위로 선언을 끌어올려주는것)
// 3). has no block scote : 블럭스콥 안에 변수를 선언한 것이 블럭밖에서도 작용한다.

//var예제 : 값이 변수보다 먼저 쓰인 예
age = 4;//값
var age; // 변수 

//블럭스콥 { 여기 안에 작성:블럭밖에서는 블럭안에 있는 내용을 볼 수 없다}
{
    console.log('hello world');
    let name = 'noh';
    console.log(name);
    name ='hello';
    console.log(name);
}

//3. constants : 한번 할당하면 절대 바뀌지 않는 값
//-security:보안상 이유
//-thread safety : 동시에 변수에 접근해서 변수 변경하면 위험하므로 값이 변하지 않는것을 사용하는 것이 좋다.
//-reduce human mistakes: 다른개발자가 코드 변경시 실수 방지 


// 4. Variable types
// - primitive : single item (number, string, boolean, null, undefined, symbol) 
// - object : box container(싱글타입을 묶어서 한 박스로 관리해줄 수 있게 하는 타입)
// - function : fisrt-class function(펑션도 변수에 할당이 가능하고 또 함수에 파라미터(인자)로도 전달되고 리턴도 가능하다.)


//number
const count = 17; //number (숫자)
const size = 17.1; //decimal number (소숫점 숫자)
console.log(`value: ${count}, type: ${typeof count}`);//backtick 방식
console.log(`value: ${size}, type: ${typeof size}`);//backtick 방식

console.log(' value: ' + count + ' type: ' + typeof count);
console.log(' value: ' + size + ' type: ' + typeof size);

//number - speicla numeric values(특수 숫자 값): infinity, -infinity. NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//string 
const char ='c';
const brendan ='brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;//template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean(참과 거짓) 
//boolean : "true" 및 "false"라는 두 가지 가능한 값이 있는 이진 변수.
//false: 0, null, undefined, NaN, ''(비어있는 스트링)
//ture: any other value

const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof canRead}`);

//null(명확하게 넌 비어있는 값이야, 아무것도 아니야.)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined(선언은 되었지만 값지 지정되어 있지 않아서 명확하지 않은 상태) 
let x;// let x = undefined;(같은의미 표기)
console.log(`value: ${x}, type: ${typeof x}`);

//symbol(create unique identifiers for objects : 고유한 식별자가 필요한겨우)
// const symbol1 = symbol('id');
// const symbol2 = symbol('id');
// console.log(symbol1 === symbol2); //false 
// const symbol1 = symbol.for('id');
// const symbol2 = symbol.for('id');
// console.log(symbol1 === symbol2); //ture




//object: real-life object, data structure (일상생활에서 볼수 있는 물건과 물체같은 박스형태)
const ellie = {name: 'ellie', age: 20};//컨스트 키워드로 정의되어 있어서 한번 할당된 오브젝트는 다른 오브젝트에 할당 불가
ellie.age = 21; // 그래서 이런식으로 변경




//Dynamic typing: dynamically typed language 
let text = 'hello';
console.log(text.charAt(0)); // 변수 바로아래에서는 인식함
console.log(`value: ${text}, type: ${typeof hello}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;//앞이 스트링 뒤가 숫자면 뒤에 숫자를 스트링으로 인식하며 더하기 연산하지 않음
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';//앞 뒤가 모두 스트링인 경우 숫자로 인식하며 나누기 연산함
console.log(`value: ${text}, type: ${typeof text}`);
 
//console.log(text.charAt(0)); // 변수가 숫자로 바뀐 다음에는 에러 발생



