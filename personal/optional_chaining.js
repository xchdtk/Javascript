// 옵셔널 체이닝
// user?.는 user가 null이나 undefined인 경우만 처리할 수 있습니다.

let user = {};
console.log(user?.address?.street);

// 옵셔널 체이닝은 선언이 완료된 변수를 대상으로만 동작합니다.
// home?.address;
// -> ReferenceError: home is not defined

// ?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다. 참고로 이런 평가 방법을 단락 평가라고 부른다.

// ?.은 연산자가 아니다. ?.은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)이다.
let user1 = {
    admin() {
        console.log("111 관리자 계정입니다.");
    },
};

let user2 = {};

user1.admin?.();
user2.admin?.();

// .대신 대괄호 []를 사용해 객체 프로퍼티에 접근하는 경우엔 ?.[]를 사용할 수도 있습니다.
let user3 = {
    firstName: "kim",
};

let user4 = null;

let key = "firstName";

console.log(user3?.[key]);
console.log(user4?.[key]);
