// // 객체와 비구조화 할당

// const dog = {
//   name: "멍멍이",
//   age: 2,
//   cute: true,
// };

// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);

// const ironMan = {
//   name: "토니 스타크",
//   actor: "로버트 다우니 주니어",
//   alias: "아이언맨",
// };

// const captainAmerica = {
//   name: "스티븐 로저스",
//   actor: "크리스 에반스",
//   alias: "캡틴 아메리카",
// };

// function print(hero) {
//   const {alias, name, actor} =  hero
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// 객체 안에 함수 넣기
const dog = {
  name: "멍멍이",
  sound: "멍멍",
  say() {
    console.log(this.sound);
  },
};

dog.say();

const cat = {
  name: "야옹이",
  sound: "야옹",
};

cat.say = dog.say;
cat.say();
