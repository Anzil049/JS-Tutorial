

let add=()=>{
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var res=num1+num2;
    document.getElementById("result").innerHTML="result="+res
}
let sub=()=>{
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var res=num1-num2;
    document.getElementById("result").innerHTML="result="+res
}