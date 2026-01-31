 function fun1(){
    return new Promise((resolve,reject) => {
        console.log("fun1 started");
        setTimeout(()=>{
            console.log("fun1 completed");
            resolve();
        },3000);
    })
}

function fun2 (){
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
            console.log("fun3 completed");
            resolve();
            // console.log("fun3 failed");
            // reject();
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


// async function run(){
    try{
        await fun1() 
        await fun2()
        await fun3()
        await fun4()
        console.log("Execution completed")
    }
    catch(error){
        console.log("Execution failed")
    }
// }
// run()
