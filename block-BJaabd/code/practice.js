var a=0;
for(let i=0;i<=5;i++){
var b=+prompt("enter the no")
a+=b;
}
var avg=a/5;
switch(true){
    case avg<60:
console.log("f")
break;
    case avg<70:
console.log("e")
break;
    case avg<80:
console.log("d")
break;
    case avg<90:
console.log("c")
break;
    case avg<100:
console.log("b")
break;
    default:
console.log("not allowed")}

