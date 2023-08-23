let arr =[78,55,11]
let c=arr.forEach((value)=>{
    console.log(value)
})

console.log(c)     //ye new array ni banata hai/ye modify krta hai original array ko/number return krta hai/ye list deta hai





/*ARRAY-MAP */
// let newArr=arr.map((value,index,array)=>
// {
//     console.log(value)
//     return value*2
// })
// console.log(newArr)  //ye new array bhi banata hai/ye original array ko modify ni krta hai/array return krta hai





/*Array-Filter-Mwthod */
// let fil=arr.filter((filter)=>{  ///ye original array ko modify ni krta hai/--Array return krta hai

//     return filter<50
// })
// console.log(fil)


/*REDUCE OF ARRAY */
/*direct creating function*/
// let arr3=[1,2,3,5,2,1]
// let red =arr3.reduce((h1,h2)=>{
//     return h1 + h2
// })
// console.log(red)


/* creating function and call in reduce*/
// let arr3=[1,2,3,5,2,1]
// const arr3red=(h1,h2)=>{
//     return h1+h2
// }
// let red=arr3.reduce(arr3red)//function call bhi kr skte hai
// console.log(red)


// let arr3=[1,2,3,5,2,1]
// const add=(b1,b2)=>b1+b2  //short-handed mtd creation.00
// let reduced=arr3.reduce(add)
// console.log(reduced)