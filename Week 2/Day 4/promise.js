const promise1=new Promise((resolve,reject) => {
    resolve(['MongoDb','Express']);
    // reject("API failed")
})
const promise2=new Promise((resolve,reject) => {
    resolve(['React','Node']);
    // reject("API failed")
})

//Normal

// promise1
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// })

// promise2
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// })


//Promise.all()

const promiseAll=Promise.all([promise1,promise2]);
promiseAll
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})


//Promise.allSettled()

// const promiseAll=Promise.allSettled([promise1,promise2]);
// promiseAll
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


//Promise.any()

// const promiseAll=Promise.any([promise1,promise2]);
// promiseAll
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

