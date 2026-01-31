let num =[3,7,2,9,1];
let larg=num[0]
for(i=1;i<=num.length;i++){
    if(larg<num[i]){
        larg=num[i]
    }
}
console.log(larg)