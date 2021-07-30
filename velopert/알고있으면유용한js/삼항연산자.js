const array = [];
let text1 = "";
if (array.length === 0) {
  text1 = "배열이 비어있습니다.";
} else {
  text1 = "배열이 비어있지 않습니다.";
}

console.log(text1);

// 삼항연산자

let text2 =
  array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지않습니다.";
console.log(text2);

// 삼항연산자 중첩 (권장 x)
const condition1 = false;
const condition2 = false;

const value = condition1 ? "와우" : condition2 ? "blabla" : "foo";
console.log(value);
