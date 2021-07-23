// // function
// function add(a, b) {
//   return a + b;
// }

// const sum = add(1, 2);
// console.log(sum);

// function hello(name) {
//   return `hello ${name}`;
// }

// console.log(hello("jjnsoo"));

// function getGrade(score) {
//   if (score === 100) {
//     return "A+";
//   } else if (score >= 90) {
//     return "A";
//   } else if (score === 89) {
//     return "B+";
//   } else if (score >= 80) {
//     return "B";
//   } else {
//     return "공부 좀 하자";
//   }
// }

// const grade = getGrade(73);
// console.log(grade);

// 화살표 함수
const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const sum1 = add1(1, 2);
console.log(sum1);

const sum2 = add2(3, 4);
console.log(sum2);

const hello = (name) => {
  console.log(`hello ${name}`);
};

hello("gimjinsoo");
