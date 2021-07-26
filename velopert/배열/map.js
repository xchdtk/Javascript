const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squared1 = [];
const squared2 = [];

// 기본 for문
for (let i = 0; i < array.length; i++) {
  squared1.push(array[i] * array[i]);
}

// foreach
array.forEach((n) => {
  squared2.push(n * n);
});

// map
const square = (n) => {
  return n * n;
};

const squared3 = array.map(square);
console.log(squared3);

const squared4 = array.map((n) => {
  return n * n;
});
console.log(squared4);

// 활용
items = [
  {
    id: 1,
    text: "hello",
  },
  {
    id: 2,
    text: "bye",
  },
];

const texts = items.map((items) => {
  return items.text;
});

console.log(texts);

// indexof = 배열내의 index를 찾을 수 있음
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "탁터 스트레인지"];
const index = superheroes.indexOf("토르");
console.log(index);

// find, findIndex => 맞는 조건이 여러개여도 가장 처음 맞는 조건 하나만 반환합니다.
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const index2 = todos.findIndex((todo) => {
  return todo.id === 3;
});

const index3 = todos.find((todo) => {
  return todo.done === true;
});

console.log(index2);
console.log(index3);
