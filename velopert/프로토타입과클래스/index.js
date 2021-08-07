// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function () {
//   console.log(this.sound);
// };

// const dog = new Animal("개", "멍멍이", "멍멍");
// const cat = new Animal("고양이", "야옹이", "야옹");

// dog.say();
// cat.say();

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");
console.log(dog);
console.log(cat);
console.log(dog.say())
