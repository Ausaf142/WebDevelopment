// Prob1
let age =prompt("What is your age?")
// if(age>10 && age<20){
//     alert("Yes, age is between 10 and 20")
// }
// else{
//     alert("No Your age does not belong to the range")
// }


//Prob 2

age=Number.parseInt(age)

switch(age){
  case 11:
    console.log("You age is 11");
    break;
  case 12:
    console.log("Yor age is 12");
    break;
  case 13:
    console.log("You age is 13");
    break;
  case 14:
    console.log("Yor age is 14");
    break;
  case 15:
    console.log("You age is 15");
    break;
  case 16:
    console.log("Yor age is 16");
    break;
  default:
    console.log("Input Error")
    
}
//Prob 3
let num =prompt("What is your age?")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("your number is divisble by 2 & 3")
}
else{
    console.log("your number is NOT divisble by 2 & 3")
}

// Prob 4
let n =prompt("What is your age?")
n=Number.parseInt(n)
if(num%2==0 || num%3==0){
    console.log("your number is divisble by 2 & 3")
}
else{
    console.log("your number is NOT divisble by 2 & 3")
}