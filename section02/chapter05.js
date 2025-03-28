 // 원시 타입
 // Number, String, Boolean 등
 // 값 자체로써 변수에 저장되고 복사된다
 // 불변값이다(메모리 값 수정X)

 // 객체 타입
 // Object, Array, Function 등
 // 참조값을 통해 변수에 저장되고 복사된다
 // 가변값이다(메모리 값 수정O)

 /*
let o1 = { name: "이정환" };
let o2 = o1;
o2.name = "홍길동";
-> o1.name도 홍길동으로 바뀜
-> 얕은 복사 

let o2 = {...o1};
-> 새로운 객체 생성
-> 깊은 복사
*/


/*
객체 타입 주의사항

1. 의도치 않게 값이 수정될 수 있다.
-> let o2 = {...o1}; 사용

2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다
let o1 = { name: "이정환" };
let o2 = o1;
let o3 = {...o1};

console.log(o1 === o2); -> true  -> 얕은 비교교
console.log(o1 === o3); -> false

프로퍼티를 기준으로 비교하도록 하고 싶다면
console.log(
    JSON.stringify(o1) === JSON.stringify(o3) -> 깊은 비교교
);
위처럼 JSON.stringify() 내장 함수를 사용하여 객체를 문자열로 변환해야함

3. 배열과 함수도 사실 객체이다.
*/