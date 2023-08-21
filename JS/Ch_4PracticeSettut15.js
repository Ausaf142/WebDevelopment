/*Q1-Sol*/
let str="har\"";
console.log(str.length)  //-->4


/*Q2-Sol*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
let swith="The"
const ewith="dog.";
console.log(sentence.includes(word)); /*--->true*/
console.log(sentence.startsWith(swith)); /*--->true*/
console.log(sentence.endsWith(ewith)); /*--->true*/

// Q3-Sol 
console.log(word.toUpperCase())

//Q4-Sol
let str2="Please give Rs 1000"
let amt = Number.parseInt((str2.slice("Please give Rs ".length)))//-->overall length dega
console.log(amt)
console.log("Please give Rs ".length)//-->overall length dega


/*Q5-Sol*/
let str3="friend";
str3[1]="y"
console.log(str3)
/*EXISTING STRING CANT BE UPDATE BCZ IT NOT MUTABLE*/