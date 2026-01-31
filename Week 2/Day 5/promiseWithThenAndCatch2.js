function fun1(){
    return new Promise((resolve,reject) => {
        console.log("fun1 started");
        setTimeout(()=>{
            console.log("fun1 completed");
            resolve();
        },3000);
    })
}

function fun2(){
    return new Promise((resolve,reject) => {
        console.log("fun2 started");
        setTimeout(()=>{
            console.log("fun2 completed");
            resolve();
        },3000);
    })
}

function fun3(){
    return new Promise((resolve,reject) => {
        console.log("fun3 started");
        setTimeout(()=>{
            // console.log("fun3 completed");
            // resolve();
            console.log("fun3 failed");
            reject();
        },3000);
    })
}

function fun4(){
    return new Promise((resolve,reject) => {
        console.log("fun4 started");
        setTimeout(()=>{
            console.log("fun4 completed");
            resolve();
        },3000);
    })
}


fun1()
.then(fun2)
.then(fun3)
.then(fun4)
.then(() => console.log("Execution completed"))
.catch(() =>console.log("Execution failed"));