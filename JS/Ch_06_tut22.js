let num = Math.floor(Math.random() * 101)
console.log(num)
let input;
while (num != input) {
  input = prompt("Enter your number")
  input = Number.parseInt(input)
  if (num < input) {
    console.log("Number is smaller than your input")
  }
  else if (num > input) {
    console.log("Number is Bigger then your input")
  }
}
console.log("Wooh!You Win")
console.log(`The number is ${num} and you entered ${input}`)