//변수와 상수
//상수 => 선언과 동시에 값을 할당해야 함, 한번 선언하면 값을 변경할 수 없다.
const sum = 5 + 10;

//변수 => 여러 번 값을 변경할 수 있다.
let result  = false;


// 변수와 상수 유효 범위 => 블록스코프({})
{
    const name = 'Mark';
    console.log(name);
}

let age = 37;
{
    age++;
    console.log(age)
}

console.log(age)

{
    {
        {
            console.log(age);
        }
    }
}

// var의 유효 범위 => 함수 스코프

var a = 0 ;
(function() {
    a++;
    console.log(a)
})();

console.log(a);

(function() {
    var b = 0;
    console.log(b);
})();

//var를 블록스코프에서 사용

var c = 0;

{
    c++;
    console.log(c)
}

{
    var d = 0;
    console.log(d);
}

