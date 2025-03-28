// 단락 평가
// 특정 조건에 맞춰서 함수를 아예 호출하지 않음
function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

//returnFalse함수 호출X
console.log(returnTrue() || returnFalse());
console.log(returnFalse() && returnTrue());

function printName(person){
    // if(!person){
    //     console.log("person에 값이 없음");
    //     return;
    // }
    // console.log(person.name);
    console.log(person && person.name);

    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name: "김동은"});