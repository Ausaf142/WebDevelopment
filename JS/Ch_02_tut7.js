//Conditional Statement
let a=prompt("What is your age?");  //Ye user se input lega string type me hi,hume further apne logic k liye age ko  convert krna padega 
console.log(typeof a)
a=Number.parseInt(a)
console.log(typeof a)

//if-else
if(a>18){
    alert("This is valid age");
}
else{
    alert("You are a kid! Go and play");
}

//if---else-if---else-if---else

if(a<0){
    alert("This is invalid age");
}
else if(a<18){
    alert("You are not eligible for drive")
}
else if(a>17 && a<65){
    alert("You are eligible for drive")
}
else{
    alert("You can drive but it would be risky");
}