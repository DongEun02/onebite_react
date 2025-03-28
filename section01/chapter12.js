// 1. 함수 표현식식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
}
console.log(varC());

let varD = () => 1;
console.log(varD());

let varE = (value) => value + 1;
console.log(varE(5));

let varF = (value) => {
    console.log(value);
    return value+1;
}
console.log(varF(10));