var secret=Math.floor(Math.random()*10)+1;
console.log(secret);


function guess(){
    var guess=parseInt(document.getElementById("guessnum").value);

    if(isNaN(guess)||guess<1||guess>10){
        alert("Enter a number between 1 to 10");
    }else if(guess>secret){
        alert("Too high");
    }else if(guess<secret){
        alert("Too low");
    }else{
        alert("Congrats,Your guess is right")
    }
}
