let obj={
    name:"Anzil K",
    Address:{place:"Tirur",PIN:"676102"}
}
// let str=JSON.stringify(obj);
// console.log(obj);
// console.log(str);
let copy=JSON.parse(JSON.stringify(obj));

copy.Address.place="BP Angadi";

console.log(obj.Address.place);
console.log(copy.Address.place);