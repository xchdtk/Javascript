// splice = 기존의 배열이 잘려짐
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 3);
console.log(spliced);
console.log(numbers);

// slice
const numbers2 = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers2);
