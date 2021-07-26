// concat = 기존의 배열은 변경되지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated1 = arr1.concat(arr2);
console.log(concated1);

const concated2 = [...arr1, ...arr2];
console.log(concated2);

console.log(arr1);
