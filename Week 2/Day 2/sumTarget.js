let numbers=[1,2,3,4,5,6,7,8,9,0];
let target=9;
let seen=[];
let result=[];

numbers.map((num) => {
    if(seen.includes(target-num)){
        result.push([num,target-num]);
    }
    seen.push(num);
})

console.log(result);