let num = Math.floor(Math.random() * 101)
console.log(num)
let input;
let count=0;
while (num != input) {
  count++;
  input = prompt("Guuess the Number Between 1 -100")
  input = Number.parseInt(input)
  if (num < input) {
    console.log("Number is smaller than your input")
  }
  else if (num > input) {
    console.log("Number is Bigger then your input")
  }
}
console.log("Wooh!You Win")
console.log(`The number is ${num} and you entered Correct input! You took ${count} time to crack`)