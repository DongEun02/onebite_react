function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업
        // executor
    
        setTimeout(() => {
            
            if(typeof num === "number"){
                resolve(num + 10);
            } else{
                reject("num이 숫자가 아닙니다.");
            }
    
    //        console.log("안녕");
    //        resolve();
    //        reject("왜 실패했는지 이유...");
        }, 2000);
    });
    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);

    // const newP = add10(result);
    // return newP;
    return add10(result);
}).then((result) => {
    return add10(result);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    // executor

    setTimeout(() => {
        const num  = 10;
        if(typeof num === "number"){
            resolve(num + 10);
        } else{
            reject("num이 숫자가 아닙니다.");
        }

//        console.log("안녕");
//        resolve();
//        reject("왜 실패했는지 이유...");
    }, 2000);
});

// setTimeout(() => {
//     console.log(promise);
// }, 3000);

// then 메서드
// -> 그 후에

// promise.then((value) => {
//     console.log(value);
// });
// promise.catch((error) => {
//     console.log(error);
// });

promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
