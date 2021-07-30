const dog = {
  name: "멍멍이",
};

function getName(animal) {
  //   if (animal) {
  //     return animal.name;
  //   }

  //   return undefined;
  return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// and 연산자는 앞이 truthy한 값이면 뒤가 결과값, 앞이 falsy한 값이면 falsy한 값 반환
console.log(true && "hello");
console.log(false && "hello");
console.log("hello" && "bye");
console.log("null" && "hello");
console.log(undefined && "hello");
console.log("" && "hello");
console.log(0 && "hello");
console.log(1 && "hello");
console.log(1 && 0);

const object = { name: 1 };

const name2 = object && object.name;
console.log(name2);

const namelessDog = {
    name: '',
},

function getName(animal) {
    const name = animal && naimal.name;
}
