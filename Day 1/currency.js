function convert(){
    var usd=parseFloat(document.getElementById("usd").value);
    var inr=parseFloat(usd*88.05);
    document.getElementById("result").innerHTML=usd +" USD is "+inr+" INR"

}