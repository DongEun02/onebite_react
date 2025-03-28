// 함수선언

/*
function greeting() {
    console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");
*/

console.log(getArea(10, 20));
let area1 = getArea(33, 20);
console.log(area1);

// 함수 선언문을 호출문 밑에 놔둬도 정상 작동
// 호이스팅
// 끌어올리다 라는 뜻
function getArea(width, height) {
    function another() {    // 중첩 함수
        console.log("another");
    }
    another();
    let area = width * height;

    return area;
}