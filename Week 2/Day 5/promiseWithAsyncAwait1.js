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


// async function run() {
    try{
        await fun1();
        console.log("Execution Succesfull");
    }
    catch{
        console.log("Execution failed");
    } 
// }

// run()