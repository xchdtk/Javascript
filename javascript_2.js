// 함수 먼저
function hello1() {
    console.log('hello1');
}

hello1();

// 함수 호출을 먼저
hello2();

function hello2() {
    console.log('hello2');
}

// 호이스팅은 변수 선언만 위로 올라간다 또 var만 호이스팅 효력이 있다.
age = 6;
age++;
console.log(age)

var age;

console.log(name)

name = '김진수';

console.log(name)

var name;

// let은 호이스팅 효력이 없기에 var과 똑같이 사용하면 에러가 날 수도 있다.
//console.log(name)

//name = 'mark'

//let name;

