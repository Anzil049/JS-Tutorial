function bmi(){
    var weight=parseFloat(document.getElementById("weight").value);
    var height=parseFloat(document.getElementById("height").value);
    
    var sqr=parseFloat(height*height);
    var bmi=parseFloat(weight/sqr);
    // document.getElementById("BMI").innerHTML="your body mass index is "+bmi;
    alert("your BMI is "+bmi);


}