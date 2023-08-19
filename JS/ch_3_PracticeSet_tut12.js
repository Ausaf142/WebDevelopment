//Practice set for Loop

// Q1-sol
let marks ={
mayank : 5,
yakoo : 10,
shraddha:15
 }

/*console.log(Object.keys(marks)n)  //for understanding purpose
 console.log(Object.keys(marks).length)
 console.log(Object.keys(marks)[1])*/

/* for (let i=0;i<Object.keys(marks).length;i++){
     console.log("The marks of "+Object.keys(marks)[i]+" is "+Object.values(marks)[i])
    }*/

// Q2-Sol
//For in loop of q1
/*for (let i in marks){
    // console.log(i)
    console.log("The marks of "+i+" is "+marks[i])
}*/

//  Q3-Sol 
// print the "try-again" until user give correct one 
/*let cn =5;
let i
while (i != cn) {
    i=prompt("Try Again");
}
console.log("Entered correct number")*/



// Q4-Sol 
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,4,4,4))