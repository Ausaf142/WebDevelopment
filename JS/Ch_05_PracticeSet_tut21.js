/*Problem--1*/
// let input=prompt("Enter the number")//prompt input string hota hai islye hume ise parse krna hoga
// let inputUser=Number.parseInt(input)
// let arr=[1,2,3,4,5]
// arr.push(inputUser)
// console.log(arr)

/*Problem---2*/
/*This is the solution of what exactly que has been asked*/
// let arr2 = [1, 2, 3, 4, 5]
// let input;
// while (input != 0) {
//   input = prompt("Enter the number")
//   input = Number.parseInt(input)
//   arr2.push(input)
  
// }
// console.log(arr2)
// console.log("Sorry u cant add")

/*My modification*/
// for(let i=0;i<arr2.length;i++){
//   let input = prompt("Enter the number")
//     if(input != 0) {
//       input = Number.parseInt(input)
//       arr2.push(input)
//       console.log(arr2)
//     }
//   else{
//     console.log("Sorry u cant add")
//     break
//   }
// }

/*Problem--3*/
// let arr3 = [10, 25, 30, 45, 50]
// let newArr=arr3.filter((div)=>{
//     div%10==0
// }
// )
// console.log(newArr)


/*Problem--4*/
// let arr4 = [10, 25, 30, 45, 50]
// let newArr=arr4.map((value,index,array)=>
// {
//     console.log(value)
//     return value*value
// })
// console.log(newArr)

/*Problem--5*/
// let n = [1,2,3,4,5,6]
// let fact=n.reduce((a,b)=>{  //arrow function
//     return a*b
// })
// console.log(fact)