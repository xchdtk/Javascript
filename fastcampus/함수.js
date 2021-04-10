// function sum_1(a, b) {
//     return a+b
// }

// let c = sum_1(10, 20)
// console.log(c)

// function sum_2() {
//     return "sum 함수를 호출했나요111"
// }

// let b = sum_2();
// console.log(b)

// function sum_3() {
//     console.log("sum함수 호출했따222")
// }

// sum_3();

// var sum_4 = function(){
//     console.log("sum함수 호출했따333")
// }

// sum_4()

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

var a = [1, 2, 3, 4, 10];
Array.prototype.print = function() {
    for(var i=0; i<this.length; i++){
        console.log(a[i]);
    }
}

a.print()


