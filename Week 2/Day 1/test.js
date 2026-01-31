// let row=5;
// for (i=0;i<=row;i++){
//     let eachrow=""
//     for(j=0;j<i;j++){
//         eachrow+="* "
//     }
//     console.log(eachrow);
// }



// let arr=[12,23,4,3,21,43,45,44,29];
// let res=[];
// // console.log(arr[0],arr[arr.length-1])
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             res.push(arr[i]);
//         }
//         else{
            
//         }
//     }
// }
// console.log(res)



let arr=[1,2,3,4,5,6,7,8,9,10];
let i=0;

let print=setInterval(()=>{
    console.log(arr[i]);
    i++;
    
    if(i==arr.length){
        clearInterval(print);
        let j=arr.length-1
        let backprint=setInterval(()=>{
            console.log(arr[j]);
            j--;
            if(j<0){
                clearInterval(backprint);
            }
            },1000)
    }
    
},1000)