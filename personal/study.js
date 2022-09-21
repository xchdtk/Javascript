let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    },
};

user.sayHi(); // 보라
