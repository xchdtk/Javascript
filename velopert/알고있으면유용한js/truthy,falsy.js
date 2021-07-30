// function print(person) {
//   if (!person) {
//     return;
//   }
//   console.log(person.name);
// }

// const person = {
//   name: "John",
// };

// print(person);

// falsy한 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);

// truthy한 값
console.log(!3);
console.log(!"hello");
console.log(!["array"]);
console.log(![]);
console.log(!{});

const value = {
  a: 1,
};

if (value) {
  console.log("value가 Truthy 하네요");
}

const truthy = value ? true : false;
console.log(truthy);
