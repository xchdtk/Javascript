// function Car(a, b) {
//     this.name  = a; // public 변수
//     this.color = b; // public 변수 var move   = c; // private 변수
// }

// Car.prototype.move = function() {
//     console.log(this.name + "차이고" + this.color + "색입니다");
// }
// var a = new Car("현대", "노란")
// a.move()
// var b = new Car("기아", "노란")
// b.move()

// ES6 class

// class Car {
//     constructor(a, b){
//         this.name  = a;
//         this.color = b;
//     }

//     move() {
//         console.log(this.name + "차이고" + this.color + "색입니다");
//     }
// }

// var a = new Car("현대", "초록")
// a.move()
// var b = new Car("기아", "빨강")
// b.move()


// 변수

// const a = 10;
// let   b = 1;
// if(true) {
//     let b = 2;
//     console.log(b)
// }

// console.log(b)

// const arr = 'hello';
// console.log('arr 은' + arr); 
// console.log(`arr 은${arr}`); 


// Arrow Function

let func1 = function(a, b) {
    return a+b
}

const func2 = (a, b) => {
    return a+b
}

const func3 = (a, b) => a+b

console.log(func1(1,2))
console.log(func2(1,2))
console.log(func3(1,2))



// 스프레드 연산자
const [d,e,f] = [1, 2, 3];
console.log(e)
const arr1 = [1,2]
const arr2 = [3,4,5]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

function abc(a, ...b) {
    console.log(b[0])
}

abc('nodejs', 'hello', 1)



