fetch("https://catfact.ninja/fact")
.then((res) => res.json())            //.json to get in object/.text to get in string
.then((txt) => console.log(txt.fact))


// .then((txt) =>{
//      let op=JSON.parse(txt);
//      console.log(op.fact);
//     })


.catch(()=>console.log("Api fetch unsuccessfull"))