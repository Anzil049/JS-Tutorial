function mainCounter(){

    let count=0;

    return function(){
        count+=1;
        console.log(count);
    }

}
let counterA=mainCounter();
counterA();
counterA();
counterA();
counterA();
counterA();
counterA();
let counterB=mainCounter();
counterB();
counterB();
counterB();
counterB();
counterB();
counterB();