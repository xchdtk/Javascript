// 생성자 함수

// function A() {}

// const a = new A();
// console.log(a, typeof(a))
// console.log(A());


// 생성하면서 데이터 넣기
// function B(name, age) {
//     console.log(name, age);
// }

// const b = new B();
// const C = new B('Mark', 27);
// console.log(B())


// 값을 속성으로 넣기
function A() {
    this.name = 'Mark';

}

const a = new A();
console.log(a.name) 

// 함수를 속성으로 넣기
function B() {
    this.hello = function() {
        console.log('hello')
    }
}

new B().hello()
