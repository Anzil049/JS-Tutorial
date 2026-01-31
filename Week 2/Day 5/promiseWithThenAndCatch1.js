function fun1(){
    return new Promise((resolve,reject) => {
        console.log("fun1 started");
        setTimeout(()=>{
            // console.log("fun1 completed");
            // resolve();
            console.log("fun1 failed");
            reject();
        },3000);
    })
}


fun1()
.then(() => console.log("Execution completed"))
.catch(() =>console.log("Execution failed"));